package org.launchcode.ranchsupply.controller;

import jakarta.validation.Valid;
import org.launchcode.ranchsupply.model.dto.AddToCartItemRequest;
import org.launchcode.ranchsupply.model.dto.CartDto;
import org.launchcode.ranchsupply.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private CartService cartService;

    // get cart for a user
    @GetMapping("/user/{userId}")
    public ResponseEntity<CartDto> getCartForUser(@PathVariable Integer userId) {
        CartDto cartDto = cartService.getCartByUser(userId);
        return new ResponseEntity<CartDto>(cartDto, HttpStatus.OK);
    }
    //add items to user's cart
    @PostMapping("/{userId}")
    public ResponseEntity<CartDto> addItemToCart(@PathVariable Integer userId, @Valid @RequestBody AddToCartItemRequest request){
        CartDto cartDto = cartService.addItemToCart(userId,request);
        return new ResponseEntity<CartDto>(cartDto, HttpStatus.OK);
    }

    // remove item from cart
    @DeleteMapping("/{userId}/item/{itemId}")
    public ResponseEntity<String> removeItemFromCart(@PathVariable Integer userId, @PathVariable Long itemId) {
        cartService.removeItemFromCart(userId, itemId);
        return ResponseEntity.ok("Product is removed from Cart successfully!");
    }

    // delete all items from cart
    @DeleteMapping("/{userId}")
    public ResponseEntity<String> clearCart(@PathVariable Integer userId) {
        cartService.clearCart(userId);
        return ResponseEntity.ok("All items from Cart is removed successfully!");

    }
}
