package org.launchcode.ranchsupply.model.dto;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class OrderDto {
    private Long orderId;
    @NotBlank(message="Please provide a order name")
    private String orderName;
    private String orderStatus;
    private String paymentStatus;
    private double orderAmount;
    @NotBlank(message="Please provide a shipping address")
    private String shippingAddress;
    @NotBlank(message="Please provide a zip code")
//    @Pattern(regexp = "^(?!.*[DFIOQUdfioqu])[A-VXYa-vxy][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]?|\\s*$", message = "Please enter a valid postal code")
    private String zipCode;
    @NotBlank(message="Please provide a order city")
    private String city;
    @NotBlank(message="Please provide a state")
    private String state;
    @NotBlank(message="Please provide a shipping phone number")
    @Size(min = 10, max = 10, message = "Please provide a valid 10 digit phone number")
    private String shippingPhone;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate deliveryDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;
    private List<OrderItemDto> orderItems = new ArrayList<>();
    private RegisterFormDTO user;


    public OrderDto() {
    }

    public OrderDto(Long orderId,String orderName, String orderStatus, String paymentStatus, double orderAmount, String shippingAddress, String zipCode, String city, String state, String shippingPhone, LocalDate deliveryDate, Date createdAt, List<OrderItemDto> orderItems, RegisterFormDTO user ){
        this.orderId = orderId;
        this.orderName = orderName;
        this.orderStatus = orderStatus;
        this.paymentStatus = paymentStatus;
        this.orderAmount = orderAmount;
        this.shippingAddress = shippingAddress;
        this.zipCode = zipCode;
        this.city = city;
        this.state = state;
        this.shippingPhone = shippingPhone;
        this.deliveryDate = deliveryDate;
        this.createdAt = createdAt;
        this.orderItems = orderItems;
        this.user = user;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getOrderName() {
        return orderName;
    }

    public void setOrderName(String orderName) {
        this.orderName = orderName;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public double getOrderAmount() {
        return orderAmount;
    }

    public void setOrderAmount(double orderAmount) {
        this.orderAmount = orderAmount;
    }

    public String getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getShippingPhone() {
        return shippingPhone;
    }

    public void setShippingPhone(String shippingPhone) {
        this.shippingPhone = shippingPhone;
    }

    public LocalDate getDeliveredDate() {
        return deliveryDate;
    }

    public void setDeliveredDate(LocalDate deliveredDate) {
        this.deliveryDate = deliveredDate;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public List<OrderItemDto> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItemDto> orderItems) {
        this.orderItems = orderItems;
    }

    public RegisterFormDTO getUser() {
        return user;
    }

    public void setUser(RegisterFormDTO user) {
        this.user = user;
    }
}
