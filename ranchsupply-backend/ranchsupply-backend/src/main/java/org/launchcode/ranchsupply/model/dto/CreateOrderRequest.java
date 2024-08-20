package org.launchcode.ranchsupply.model.dto;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;


public class CreateOrderRequest {
    private Integer userId;
    private Long cartId;
    private String orderStatus;
    private String paymentStatus;

    @NotBlank(message="Please provide a valid shipping address")
    private String shippingAddress;
    @NotBlank(message="Please provide a order name")
    private String orderName;
    @NotBlank(message="Please provide a postal code")
//    @Pattern(regexp = "^(?!.*[DFIOQUdfioqu])[A-VXYa-vxy][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]$", message = "Please enter valid zip code")
    private String zipCode;

    @NotBlank(message="Please provide a city")
    private String city;

    @NotBlank(message="Please provide a province")
    private String state;

    @NotBlank(message="Please provide a shipping phone number")
    @Size(min = 10, max = 10, message = "Please provide a valid 10 digit phone number")
    private String shippingPhone;

    public CreateOrderRequest() {
    }

    public CreateOrderRequest(Integer userId, Long cartId, String orderName,String orderStatus, String paymentStatus, String shippingAddress, String zipCode, String city, String state, String shippingPhone) {
        this.userId = userId;
        this.cartId = cartId;
        this.orderName = orderName;
        this.orderStatus = orderStatus;
        this.paymentStatus = paymentStatus;
        this.shippingAddress = shippingAddress;
        this.zipCode = zipCode;
        this.city = city;
        this.state = state;
        this.shippingPhone = shippingPhone;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getOrderName() {
        return orderName;
    }

    public void setOrderName(String orderName) {
        this.orderName = orderName;
    }

    public Long getCartId() {
        return cartId;
    }

    public void setCartId(Long cartId) {
        this.cartId = cartId;
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
}
