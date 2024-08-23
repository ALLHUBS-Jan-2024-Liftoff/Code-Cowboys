package org.launchcode.ranchsupply.service;

import org.launchcode.ranchsupply.exception.ResourceNotFoundException;
import org.launchcode.ranchsupply.model.Category;
import org.launchcode.ranchsupply.model.Product;
import org.launchcode.ranchsupply.model.dto.ProductDto;
import org.launchcode.ranchsupply.repository.CategoryRepository;
import org.launchcode.ranchsupply.repository.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper modelMapper;

    // Get a product for the specified ID
    public ProductDto getProductById(Long productId) {
        Product product = this.productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("No product found with given Id!"));
        return modelMapper.map(product, ProductDto.class);
    }

    // Get all the products
    public List<ProductDto> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream().map(product -> modelMapper.map(product, ProductDto.class))
                .collect(Collectors.toList());
    }

    public ProductDto addProductWithCategory(ProductDto productDto, Long categoryId) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("No Category Found"));
        Product product = modelMapper.map(productDto, Product.class);
        product.setCategory(category);
        Product newProduct = productRepository.save(product);
        return modelMapper.map(newProduct, ProductDto.class);
    }

    // Add a new product
    public ProductDto addProduct(ProductDto productDto) {
        Product product = modelMapper.map(productDto, Product.class);
        Product savedProduct = productRepository.save(product);
        return modelMapper.map(savedProduct, ProductDto.class);
    }

    // Update an existing product
    public ProductDto updateProduct(Long productId, ProductDto productDto) {
        Product existingProduct = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        // Update product fields
        existingProduct.setTitle(productDto.getTitle());
        existingProduct.setBrand(productDto.getBrand());
        existingProduct.setDescription(productDto.getDescription());
        existingProduct.setPrice(productDto.getPrice());
        existingProduct.setDiscountedPrice(productDto.getDiscountedPrice());
        existingProduct.setQuantity(productDto.getQuantity());
        existingProduct.setProductImage(productDto.getProductImage());
        existingProduct.setSize(productDto.getSize());

        // Update category if provided
        if (productDto.getCategory() != null && productDto.getCategory().getCategoryId() != null) {
            Category category = categoryRepository.findById(productDto.getCategory().getCategoryId())
                    .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
            existingProduct.setCategory(category);
        }

        Product updatedProduct = productRepository.save(existingProduct);
        return modelMapper.map(updatedProduct, ProductDto.class);
    }

    // Delete a product with specified ID
    public void deleteProduct(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        productRepository.delete(product);
    }

    // Search products by Product Name
    public List<ProductDto> findProductsBySearchTerm(String searchTerm) {
        List<Product> products = productRepository.findByTitleContaining(searchTerm);
        return products.stream().map(product -> modelMapper.map(product, ProductDto.class))
                .collect(Collectors.toList());
    }

    public List<ProductDto> getProductsByCategoryId(Long categoryId) {
        List<Product> products = productRepository.findByCategory_CategoryId(categoryId);
        if (products.isEmpty()) {
            throw new ResourceNotFoundException("No products found for category with ID: " + categoryId);
        }
        return products.stream()
                .map(product -> modelMapper.map(product, ProductDto.class))
                .collect(Collectors.toList());
    }


}
