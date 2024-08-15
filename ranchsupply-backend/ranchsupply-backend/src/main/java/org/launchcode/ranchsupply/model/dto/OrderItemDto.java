package org.launchcode.ranchsupply.model.dto;

public class OrderItemDto {
    private Long orderItemId;
    private int quantity;
    private double totalPrice;
    private ProductDto product;

    public OrderItemDto() {
    }

    public OrderItemDto(Long orderItemId, int quantity, double totalPrice, ProductDto product) {
        this.orderItemId = orderItemId;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
        this.product = product;
    }

    public Long getOrderItemId() {
        return orderItemId;
    }

    public void setOrderItemId(Long orderItemId) {
        this.orderItemId = orderItemId;
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

    public ProductDto getProduct() {
        return product;
    }

    public void setProduct(ProductDto product) {
        this.product = product;
    }
}
