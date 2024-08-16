package org.launchcode.ranchsupply.model.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public class CartItemDto {
    private Long cartItemId;

    @NotNull(message = "Product cannot be null")
    private ProductDto product;

    @Min(value = 1, message = "Quantity must be positive")
    private int quantity;

    @DecimalMin(value = "0.0", inclusive = false, message = "Total price must be positive")
    private double totalPrice;

    public CartItemDto() {
    }

    public CartItemDto(Long cartItemId, ProductDto product, int quantity, double totalPrice) {
        this.cartItemId = cartItemId;
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }

    public Long getCartItemId() {
        return cartItemId;
    }

    public void setCartItemId(Long cartItemId) {
        this.cartItemId = cartItemId;
    }

    public ProductDto getProduct() {
        return product;
    }

    public void setProduct(ProductDto product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
