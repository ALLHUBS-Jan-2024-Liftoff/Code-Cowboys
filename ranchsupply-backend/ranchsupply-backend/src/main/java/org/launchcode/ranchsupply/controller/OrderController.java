package org.launchcode.ranchsupply.controller;

import jakarta.validation.Valid;
import org.launchcode.ranchsupply.model.Order;
import org.launchcode.ranchsupply.model.dto.CreateOrderRequest;
import org.launchcode.ranchsupply.model.dto.OrderDto;
import org.launchcode.ranchsupply.service.OrderService;
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

    //Create Order
    @PostMapping()
    public ResponseEntity<OrderDto> createOrder(@Valid @RequestBody CreateOrderRequest newRequest){
        OrderDto order = orderService.createOrder(newRequest);
        return new ResponseEntity<OrderDto>(order, HttpStatus.CREATED);
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

    //update order

    //delete order

    //get all orders
}
