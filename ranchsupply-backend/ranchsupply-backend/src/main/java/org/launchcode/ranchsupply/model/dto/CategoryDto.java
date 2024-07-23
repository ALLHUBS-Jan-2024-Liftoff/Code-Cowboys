package org.launchcode.ranchsupply.model.dto;

import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.Date;

public class CategoryDto {
    @Id
    private Long categoryId;

    @NotBlank(message = "Please provide a title")
    @Size(min = 2, message = "Please add title")
    private String categoryTitle;

    @NotBlank(message = "Please provide a description")
    private String description;

    private Date createdAt;
    private Date updatedAt;

    public CategoryDto() {
    }

    public CategoryDto(Long categoryId, String categoryTitle, String description, Date createdAt, Date updatedAt) {
        this.categoryId = categoryId;
        this.categoryTitle = categoryTitle;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryTitle() {
        return categoryTitle;
    }

    public void setCategoryTitle(String categoryTitle) {
        this.categoryTitle = categoryTitle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
