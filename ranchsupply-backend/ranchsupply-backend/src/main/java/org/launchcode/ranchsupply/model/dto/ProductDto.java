package org.launchcode.ranchsupply.model.dto;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.util.Date;

public class ProductDto {
    private Long productId;
    private CategoryDto category;

    @NotBlank(message = "Please provide a brand name")
    private String brand;

    @NotBlank(message = "Please provide a product name")
    @Size(max = 255, message = "Product Name must be less than 255 characters")
    private String title;

    @NotBlank(message = "Please provide a description")
    private String description;

    @Min(value = 0, message = "Price must be greater than 0")
    @Digits(integer = 10, fraction = 2, message = "Unit Price should be only up to 2 decimal places")
    private double price;

    @Min(value = 0, message = "Discounted Price must be greater than or equal to 0")
    @Digits(integer = 10, fraction = 2, message = "Discounted Price should be only up to 2 decimal places")
    private double discountedPrice;

    @Min(value = 0, message = "Quantity must be greater than or equal to 0")
    @Digits(integer = 10, fraction = 0, message = "Quantity should be a whole number")
    private int quantity;

    private String productImage;
    private String size;
    private Date createdAt;
    private Date updatedAt;

    public ProductDto() {
    }

    public ProductDto(Long productId, CategoryDto category, String brand, String title, String description, double price, double discountedPrice, int quantity, String productImage, String size, Date createdAt, Date updatedAt) {
        this.productId = productId;
        this.category = category;
        this.brand = brand;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountedPrice = discountedPrice;
        this.quantity = quantity;
        this.productImage = productImage;
        this.size = size;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public CategoryDto getCategory() {
        return category;
    }

    public void setCategory(CategoryDto category) {
        this.category = category;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getDiscountedPrice() {
        return discountedPrice;
    }

    public void setDiscountedPrice(double discountedPrice) {
        this.discountedPrice = discountedPrice;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getProductImage() {
        return productImage;
    }

    public void setProductImage(String productImage) {
        this.productImage = productImage;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
