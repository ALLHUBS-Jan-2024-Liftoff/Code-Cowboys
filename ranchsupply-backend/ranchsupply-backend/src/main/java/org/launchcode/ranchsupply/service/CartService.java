package org.launchcode.ranchsupply.service;

import org.launchcode.ranchsupply.exception.ResourceNotFoundException;
import org.launchcode.ranchsupply.model.Cart;
import org.launchcode.ranchsupply.model.CartItem;
import org.launchcode.ranchsupply.model.Product;
import org.launchcode.ranchsupply.model.User;
import org.launchcode.ranchsupply.model.dto.AddToCartItemRequest;
import org.launchcode.ranchsupply.model.dto.CartDto;
import org.launchcode.ranchsupply.model.dto.CartItemDto;
import org.launchcode.ranchsupply.repository.CartItemRepository;
import org.launchcode.ranchsupply.repository.CartRepository;
import org.launchcode.ranchsupply.repository.ProductRepository;
import org.launchcode.ranchsupply.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;
@Service
public class CartService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private ModelMapper modelMapper;

    //    get cart by user
    public CartDto getCartByUser(Integer id){
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No user found"));
        Cart cart = cartRepository.findByUser(user).orElseThrow(() -> new ResourceNotFoundException("No cart found"));
        return modelMapper.map(cart, CartDto.class);
    }

    //To add items in Cart
    public CartDto addItemToCart(Integer id, AddToCartItemRequest request){
        Long productId = request.getProductId();
        int quantity = request.getQuantity();

        //Fetching product from product repository
        Product product = productRepository.findById(productId).orElseThrow(() -> new ResourceNotFoundException("No product found with given Id"));

        //fetching user
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No product found with given Id"));
        Cart cart = null;
        try {
            // fetch cart for user
            cart = cartRepository.findByUser(user).get();
        } catch (NoSuchElementException ex) {
            // if no cart found then create cart
            cart = new Cart();
        }
        // PERFORM CART OPERATIONS
        AtomicReference<Boolean> updated = new AtomicReference<>(false);
        List<CartItem> items = cart.getCartItems();

        // if cart item already present update quantity and price if required
        items = items.stream().map((item) -> {
                if(item.getProduct().getProductId().equals(productId)){
                    item.setQuantity(quantity);
                    item.setTotalPrice((product.getDiscountedPrice() == 0) ? quantity * product.getPrice():quantity* product.getDiscountedPrice());
                    updated.set(true);
                }
                return item;
            }).toList();
// In case previous item is updated then we dont need to create new item
        if (!updated.get()) {
            // create cart item
            CartItem cartItem = new CartItem();
            cartItem.setQuantity(quantity);
            cartItem.setTotalPrice((product.getDiscountedPrice() == 0) ? quantity * product.getPrice():quantity* product.getDiscountedPrice());
            cartItem.setProduct(product);
            cartItem.setCart(cart);
            cart.getCartItems().add(cartItem);
        }
        cart.setUser(user);
        // Update the cart in database
        Cart updatedCart = cartRepository.save(cart);
        return modelMapper.map(updatedCart, CartDto.class);
    }

    //To remove items from cart
    public void removeItemFromCart(Integer id, Long cartItemId) {
        // check if user cart has that item or not

        CartItem cartItem = cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart Item Not Found"));
        cartItemRepository.delete(cartItem);
    }
    //To remove all items from cart
    public void clearCart(Integer id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No user found"));
        Cart cart = cartRepository.findByUser(user)
                .orElseThrow(() -> new ResourceNotFoundException("No cart found"));
        cart.getCartItems().clear();
        this.cartRepository.save(cart);
    }
}
