package org.launchcode.ranchsupply.model.dto;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Null;
import jakarta.validation.constraints.Size;
public class RegisterFormDTO extends LoginFormDTO{
    @NotBlank(message = "Username is required")
    @Size(max = 10, message = "First name must be less than 10 characters")
    private String username;

    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "Password must be more than 10 characters")
    private String password;

    @NotBlank(message = "First name is required")
    @Size(max = 50, message = "First name must be less than 50 characters")
    private String firstName;

    @NotBlank(message = "Last name is required")
    @Size(max = 50, message = "Last name must be less than 50 characters")
    private String lastName;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email. Please provide a valid email address")
    private String email;

    @Size(max = 15, message = "Phone number must be less than 15 characters")
    private String phoneNumber;

    @Size(max = 100, message = "Address must be less than 100 characters")
    private String address;

    @Size(max = 50, message = "City must be less than 50 characters")
    private String city;

    @Size(max = 50, message = "State must be less than 50 characters")
    private String state;

    @Size(max = 20, message = "Zipcode must be less than 20 characters")
    private String zipcode;
    @Null
    private String role = "user";


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


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

}
