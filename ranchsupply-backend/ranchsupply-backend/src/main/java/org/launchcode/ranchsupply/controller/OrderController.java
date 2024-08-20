package org.launchcode.ranchsupply.controller;

import com.stripe.exception.StripeException;
import jakarta.validation.Valid;
import org.launchcode.ranchsupply.model.Order;
import org.launchcode.ranchsupply.model.dto.CreateOrderRequest;
import org.launchcode.ranchsupply.model.dto.OrderDto;
import org.launchcode.ranchsupply.model.dto.UpdateOrderRequest;
import org.launchcode.ranchsupply.response.PaymentResponse;
import org.launchcode.ranchsupply.service.OrderService;
import org.launchcode.ranchsupply.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Autowired
    private PaymentService paymentService;

    //Create Order
    @PostMapping()
    public ResponseEntity<PaymentResponse> createOrder(@Valid @RequestBody CreateOrderRequest newRequest) throws StripeException {
        Order order = orderService.createOrder(newRequest);
        PaymentResponse response = paymentService.createPaymentLink(order);
        return  ResponseEntity.ok(response);
    }

    //get order by orderId
    @GetMapping("/{orderId}")
    public ResponseEntity<OrderDto> getOrderByOrderId(@PathVariable Long orderId){
        OrderDto order = orderService.getOrderById(orderId);
        return ResponseEntity.ok(order);
    }

    //get order by user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<OrderDto>> getOrderByUserId(@PathVariable Integer userId){
        List<OrderDto> orders = orderService.getOrderByUser(userId);
        return ResponseEntity.ok(orders);
    }

    @PutMapping("/{orderId}")
    public ResponseEntity<OrderDto> updateOrder(
            @PathVariable Long orderId,
            @Valid @RequestBody UpdateOrderRequest updateRequest) {
        OrderDto updatedOrder = orderService.updateOrder(orderId, updateRequest);
        return ResponseEntity.ok(updatedOrder);
    }

    // Delete order
    @DeleteMapping("/{orderId}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long orderId) {
        orderService.deleteOrder(orderId);
        return ResponseEntity.noContent().build();
    }

    // Get all orders
    @GetMapping()
    public ResponseEntity<List<OrderDto>> getAllOrders() {
        List<OrderDto> allOrders = orderService.getAllOrders();
        return ResponseEntity.ok(allOrders);
    }
}
