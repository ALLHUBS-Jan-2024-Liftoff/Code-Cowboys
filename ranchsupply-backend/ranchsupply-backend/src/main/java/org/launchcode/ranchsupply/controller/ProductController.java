package org.launchcode.ranchsupply.controller;

import jakarta.validation.Valid;
import org.launchcode.ranchsupply.model.dto.ProductDto;
import org.launchcode.ranchsupply.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {
    @Autowired
    private ProductService productservice;

    // get single product
    @GetMapping("/{productId}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable Long productId) {
        ProductDto productDto = productservice.getProductById(productId);
        return ResponseEntity.ok(productDto);
    }

    // get all the products
    @GetMapping
    public ResponseEntity<List<ProductDto>> getAllProducts(){
        List<ProductDto> products = productservice.getAllProducts();
        return ResponseEntity.ok(products);
    }
    @PostMapping
    public ResponseEntity<ProductDto> addProductForm(@Valid @RequestBody ProductDto productDto){
        ProductDto savedProduct = productservice.addProduct(productDto);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }
//    Search products by search term
    @GetMapping("/searchproducts")
    public ResponseEntity<List<ProductDto>> searchProductsByTerm(@RequestParam String searchTerm){
        List<ProductDto> matchingProducts = productservice.findProductsBySearchTerm(searchTerm);
        return ResponseEntity.ok(matchingProducts);
    }

    @PostMapping("/products/category/{categoryId}")
    public ResponseEntity<ProductDto> addProductWithCategory(@RequestBody ProductDto productDto, @PathVariable Long categoryId) {
        System.out.println("Add Product with Category endpoint hit with categoryId: " + categoryId);
        try {
            ProductDto savedProduct = productservice.addProductWithCategory(productDto, categoryId);
            return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println("Error adding product: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("{productId}")
    public ResponseEntity<ProductDto> updateProduct(@PathVariable Long productId, @RequestBody ProductDto productDto) {
        System.out.println("Update Product endpoint hit with productId: " + productId);
        try {
            ProductDto updatedProduct = productservice.updateProduct(productId, productDto);
            return ResponseEntity.ok(updatedProduct);
        } catch (Exception e) {
            System.out.println("Error updating product: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("{productId}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long productId) {
        System.out.println("Delete Product endpoint hit with productId: " + productId);
        try {
            productservice.deleteProduct(productId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            System.out.println("Error deleting product: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
