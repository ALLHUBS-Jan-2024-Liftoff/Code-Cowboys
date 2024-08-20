package org.launchcode.ranchsupply.model.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class CartDto {
    private Long cartId;

    private List<CartItemDto> items = new ArrayList<>();
    private RegisterFormDTO registerFormDTO;
    private Date createdAt;
    private Date updatedAt;

    public CartDto() {
    }

    public CartDto(Long cartId, List<CartItemDto> items, RegisterFormDTO registerFormDTO, Date createdAt, Date updatedAt) {
        this.cartId = cartId;
        this.items = items;
        this.registerFormDTO = registerFormDTO;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getCartId() {
        return cartId;
    }

    public void setCartId(Long cartId) {
        this.cartId = cartId;
    }

    public List<CartItemDto> getItems() {
        return items;
    }

    public void setItems(List<CartItemDto> items) {
        this.items = items;
    }

    public RegisterFormDTO getRegisterFormDTO() {
        return registerFormDTO;
    }

    public void setRegisterFormDTO(RegisterFormDTO registerFormDTO) {
        this.registerFormDTO = registerFormDTO;
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
