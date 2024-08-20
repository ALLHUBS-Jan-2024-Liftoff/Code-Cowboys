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
//        return new ResponseEntity<ProductDto>(productDto, HttpStatus.OK);
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
    //Search products by serach term
    @GetMapping("/search")
    public ResponseEntity<List<ProductDto>> searchProductsByTerm(@RequestParam String searchTerm){
        List<ProductDto> matchingProducts = productservice.findProductsBySearchTerm(searchTerm);
        return ResponseEntity.ok(matchingProducts);
    }
}
