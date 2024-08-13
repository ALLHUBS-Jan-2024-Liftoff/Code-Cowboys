package org.launchcode.ranchsupply.model;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import jakarta.persistence.*;
import java.util.*;

@Entity
@Table(name = "users")
public class User extends AbstractEntity{

    private Long userId;

    private String username;

    private String email;

    private String pwHash;

    private String phoneNumber;

    private String address;

    private String city;

    private String state;

    private String zipcode;

    private String firstName;

    private String lastName;


    private Date createdAt;

    private Date lastLogin;

    private String role;



    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User() {
    }

    public User(String username, String password, String firstName, String lastName,
                String email, String phoneNumber, String address, String city,
                String state, String zipcode, String role) {
        this.username = username;
        this.pwHash = encoder.encode(password);
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.role = "user";
        this.createdAt = new Date();
        this.lastLogin = null; // Set to null initially
    }

//    public User(String username, String password, String firstName, String lastName, String email, String phoneNumber, String address, String city, String state, String zipcode, String user) {
//        super();
//    }

//    public User(String username, String password, String firstName, String lastName, String email, String phoneNumber, String address, String role) {
//        super();
//    }

//    public User(String username, String password, String firstName, String lastName, String email, String phoneNumber, String address) {
//   }



    public String getUsername() {
        return username;
    }

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getUserId() {
        return userId;
    }
    

    public Date getCreatedAt() {
        return createdAt;
    }

    public Date getLastLogin() {
        return lastLogin;
    }

    public void setLastLogin(Date lastLogin) {
        this.lastLogin = lastLogin;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setUsername(String username) {
    }

    public void setPassword(String encode) {
    }
}
