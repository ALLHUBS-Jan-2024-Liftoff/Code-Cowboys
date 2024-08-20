package org.launchcode.ranchsupply.model.dto;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;


import java.time.LocalDate;

public class UpdateOrderRequest {
    private Long orderId;
    @NotBlank(message = "Please provide a valid address")
    private String shippingAddress;
    @NotBlank(message = "Please provide a order name")
    private String orderName;
    @NotBlank(message = "Please provide a postal code")
    @Pattern(regexp = "^(?!.*[DFIOQUdfioqu])[A-VXYa-vxy][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]$", message = "Please enter valid zip code")
    private String zipCode;

    @NotBlank(message = "Please provide a city")
    private String city;

    @NotBlank(message = "Please provide a province")
    private String state;

    @NotBlank(message = "Please provide a shipping phone number")
    @Size(min = 10, max = 10, message = "Please provide a valid 10 digit phone number")
    private String shippingPhone;

    @NotBlank(message = "Please provide a order status")
    private String orderStatus;

    @NotBlank(message = "Please provide a payment status")
    private String paymentStatus;
    private LocalDate deliveryDate;

    public UpdateOrderRequest() {
    }

    public UpdateOrderRequest(Long orderId, String orderName, String shippingAddress, String zipCode, String city, String state, String shippingPhone, String orderStatus, String paymentStatus, LocalDate deliveryDate) {
        this.orderId = orderId;
        this.orderName = orderName;
        this.shippingAddress = shippingAddress;
        this.zipCode = zipCode;
        this.city = city;
        this.state = state;
        this.shippingPhone = shippingPhone;
        this.orderStatus = orderStatus;
        this.paymentStatus = paymentStatus;
        this.deliveryDate = deliveryDate;
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

    public String getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
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

    public LocalDate getDeliveredDate() {
        return deliveryDate;
    }

    public void setDeliveredDate(LocalDate deliveryDate) {
        this.deliveryDate = deliveryDate;
    }
}
