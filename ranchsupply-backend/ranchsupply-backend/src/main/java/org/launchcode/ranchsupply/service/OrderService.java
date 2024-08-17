package org.launchcode.ranchsupply.service;

import org.launchcode.ranchsupply.exception.ResourceNotFoundException;
import org.launchcode.ranchsupply.model.*;
import org.launchcode.ranchsupply.model.dto.CreateOrderRequest;
import org.launchcode.ranchsupply.model.dto.OrderDto;
import org.launchcode.ranchsupply.model.dto.UpdateOrderRequest;
import org.launchcode.ranchsupply.repository.CartRepository;
import org.launchcode.ranchsupply.repository.OrderRepository;
import org.launchcode.ranchsupply.repository.ProductRepository;
import org.launchcode.ranchsupply.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ModelMapper modelMapper;

    public OrderDto getOrderById(Long orderId){
        Order order = orderRepository.findById(orderId).orElseThrow(() -> new ResourceNotFoundException("Order Not found."));
        return modelMapper.map(order, OrderDto.class);
    }

    public List<OrderDto> getOrderByUser(Integer userId){
        List<Order> orders = orderRepository.findByUserId(userId);
        List<OrderDto> orderDtos= orders.stream().map(order -> modelMapper.map(order, OrderDto.class)).collect(Collectors.toList());
        return orderDtos;
    }
    //Method to create order
    public Order createOrder(CreateOrderRequest newOrderRequest){
        // Get user from the database based on userId
        User user = userRepository.findById(newOrderRequest.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User Not Found"));

        // Get cart from the database based on cartId
        Cart cart = cartRepository.findById(newOrderRequest.getCartId()).orElseThrow(() -> new ResourceNotFoundException("Cart not found"));

        // Get items from the cart
        List<CartItem> cartItems = cart.getCartItems();
        if(cartItems.size() <= 0){
            throw new ResourceNotFoundException("No items found in cart");
        }

        Double totalOrderAmount = (double)0;
        Order order = new Order();

        order.setOrderName(newOrderRequest.getOrderName());
        order.setShippingPhone(newOrderRequest.getShippingPhone());
        order.setOrderStatus(newOrderRequest.getOrderStatus());
        order.setPaymentStatus(newOrderRequest.getPaymentStatus());
        order.setShippingAddress(newOrderRequest.getShippingAddress());
        order.setCity(newOrderRequest.getCity());
        order.setState(newOrderRequest.getState());
        order.setZipCode(newOrderRequest.getZipCode());
        order.setUser(user);
        List<OrderItem> orderItems = new ArrayList<>();

        for(CartItem cartItem : cartItems){
            Product product = cartItem.getProduct();
            int orderedQuantity = cartItem.getQuantity();
            int availableQuantity = product.getQuantity();

            if(orderedQuantity > availableQuantity){
                //skip adding this item to cart
                continue;
            }
            //add cart items to order items
            OrderItem orderItem = new OrderItem();
            orderItem.setQuantity(orderedQuantity);
            orderItem.setProduct(product);
            orderItem.setTotalPrice(orderedQuantity * (product.getDiscountedPrice() != 0 ? product.getDiscountedPrice() : product.getPrice()));
            orderItem.setOrder(order);
            totalOrderAmount += orderItem.getTotalPrice();

            //Decrease product ordered quantity from available quantity
            product.setQuantity(availableQuantity - orderedQuantity);
            productRepository.save(product);
            orderItems.add(orderItem);
        }
        //If no ordered items are added, throw an exception
        if(orderItems.isEmpty()){
            throw new ResourceNotFoundException("Insufficient Stock, No items available for order");
        }
        order.setOrderItems(orderItems);
        order.setOrderAmount(totalOrderAmount);

        //clear the cart after order is placed
        cart.getCartItems().clear();
        cartRepository.save(cart);
        Order placedOrder = orderRepository.save(order);

//        return  modelMapper.map(placedOrder, OrderDto.class);
        return placedOrder;
    }
    //To delete order

    //To update Order

    //get all orders

}
