package org.launchcode.ranchsupply.model;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long orderId;

    @Column(nullable = false)
    private String orderName;
    // PENDING, DISPATCHED, DELIVERED
    @Column(nullable = false, columnDefinition = "varchar(20) default 'PENDING'")
    private String orderStatus;

    // NOT-PAID, PAID
    @Column(nullable = false, columnDefinition = "varchar(10) default 'NOT PAID'")
    private String paymentStatus;

    @Column(nullable = false)
    private double orderAmount;

    @Column(nullable = false)
    private String shippingAddress;

    @Column(length = 6, nullable = false)
    private String zipCode;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String state;

    @Column(length = 10, nullable = false)
    private String shippingPhone;

    @Column(nullable = true)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate deliveryDate;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private Date createdAt;
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItem> orderItems = new ArrayList<>();
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id", nullable = false)
    private User user;

    public Order() {
    }

    public Order(Long orderId, String orderName, User user, String orderStatus, String paymentStatus, double orderAmount, String shippingAddress, String zipCode, String city, String state, String shippingPhone, LocalDate deliveryDate, Date createdAt, List<OrderItem> orderItems) {
        this.orderId = orderId;
        this.orderName = orderName;
        this.orderStatus = orderStatus;
        this.paymentStatus = paymentStatus;
        this.orderAmount = orderAmount;
        this.shippingAddress = shippingAddress;
        this.zipCode = zipCode;
        this.city = city;
        this.state = state;
        this.user = user;
        this.shippingPhone = shippingPhone;
        this.deliveryDate = deliveryDate;
        this.createdAt = createdAt;
        this.orderItems = orderItems;
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

    public String getZipCodeCode() {
        return zipCode;
    }

    public void setZipCode(String postalCode) {
        this.zipCode = postalCode;
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

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDate getDeliveryDate() {
        return deliveryDate;
    }

    public void setDeliveryDate(LocalDate deliveryDate) {
        this.deliveryDate = deliveryDate;
    }

    public String getZipCode() {
        return zipCode;
    }
}


