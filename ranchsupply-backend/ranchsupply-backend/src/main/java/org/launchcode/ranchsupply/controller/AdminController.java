package org.launchcode.ranchsupply.controller;

import org.launchcode.ranchsupply.model.dto.CategoryDto;
import org.launchcode.ranchsupply.model.dto.ProductDto;
import org.launchcode.ranchsupply.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("AdminController is working");
    }

    @PostMapping("/products/category/{categoryId}")
    public ResponseEntity<ProductDto> addProductWithCategory(@RequestBody ProductDto productDto, @PathVariable Long categoryId) {
        System.out.println("Add Product with Category endpoint hit with categoryId: " + categoryId);
        try {
            ProductDto savedProduct = adminService.addProductWithCategory(productDto, categoryId);
            return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println("Error adding product: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/products/{productId}")
    public ResponseEntity<ProductDto> updateProduct(@PathVariable Long productId, @RequestBody ProductDto productDto) {
        System.out.println("Update Product endpoint hit with productId: " + productId);
        try {
            ProductDto updatedProduct = adminService.updateProduct(productId, productDto);
            return ResponseEntity.ok(updatedProduct);
        } catch (Exception e) {
            System.out.println("Error updating product: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/products/{productId}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long productId) {
        System.out.println("Delete Product endpoint hit with productId: " + productId);
        try {
            adminService.deleteProduct(productId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            System.out.println("Error deleting product: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/products")
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        System.out.println("Get All Products endpoint hit");
        try {
            List<ProductDto> products = adminService.getAllProducts();
            return ResponseEntity.ok(products);
        } catch (Exception e) {
            System.out.println("Error retrieving products: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/products/{productId}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable Long productId) {
        System.out.println("Get Product by ID endpoint hit with productId: " + productId);
        try {
            ProductDto productDto = adminService.getProductById(productId);
            return ResponseEntity.ok(productDto);
        } catch (Exception e) {
            System.out.println("Error retrieving product: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/categories")
    public ResponseEntity<CategoryDto> addCategory(@RequestBody CategoryDto categoryDto) {
        System.out.println("Add Category endpoint hit");
        try {
            CategoryDto savedCategory = adminService.addCategory(categoryDto);
            return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println("Error adding category: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/categories/{categoryId}")
    public ResponseEntity<CategoryDto> updateCategory(@PathVariable Long categoryId, @RequestBody CategoryDto categoryDto) {
        System.out.println("Update Category endpoint hit with categoryId: " + categoryId);
        try {
            CategoryDto updatedCategory = adminService.updateCategory(categoryId, categoryDto);
            return ResponseEntity.ok(updatedCategory);
        } catch (Exception e) {
            System.out.println("Error updating category: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/categories/{categoryId}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Long categoryId) {
        System.out.println("Delete Category endpoint hit with categoryId: " + categoryId);
        try {
            adminService.deleteCategory(categoryId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            System.out.println("Error deleting category: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/categories")
    public ResponseEntity<List<CategoryDto>> getAllCategories() {
        System.out.println("Get All Categories endpoint hit");
        try {
            List<CategoryDto> categories = adminService.getAllCategories();
            return ResponseEntity.ok(categories);
        } catch (Exception e) {
            System.out.println("Error retrieving categories: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
