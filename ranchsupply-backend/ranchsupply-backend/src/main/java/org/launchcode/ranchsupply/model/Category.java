package org.launchcode.ranchsupply.model;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;

    @Column(length = 60, nullable = false)
    private String categoryTitle;

    @Column(nullable = false)
    private String description;

    @Column(name = "category_image", nullable = false)
    private String categoryImage;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    private Date updatedAt;
    @OneToMany(mappedBy = "category",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
    private List<Product> products =new ArrayList<>();

    public Category() {
    }

    public Category(Long categoryId, String categoryTitle, String description, Date createdAt, Date updatedAt, List<Product> products) {
        this.categoryId = categoryId;
        this.categoryTitle = categoryTitle;
        this.description = description;
        this.categoryImage = categoryImage;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.products = products;
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

    public String getCategoryImage() {return categoryImage;}

    public void setCategoryImage(String categoryImage) {this.categoryImage = categoryImage;}

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

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
