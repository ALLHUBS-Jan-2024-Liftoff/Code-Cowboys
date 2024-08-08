package org.launchcode.ranchsupply.service;

import org.launchcode.ranchsupply.exception.ResourceNotFoundException;
import org.launchcode.ranchsupply.model.Category;
import org.launchcode.ranchsupply.model.Product;
import org.launchcode.ranchsupply.model.dto.CategoryDto;
import org.launchcode.ranchsupply.model.dto.ProductDto;
import org.launchcode.ranchsupply.repository.CategoryRepository;
import org.launchcode.ranchsupply.repository.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper modelMapper;

    public ProductDto addProductWithCategory(ProductDto productDto, Long categoryId) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("No Category Found"));
        Product product = modelMapper.map(productDto, Product.class);
        product.setCategory(category);
        Product newProduct = productRepository.save(product);
        return modelMapper.map(newProduct, ProductDto.class);
    }

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

    public void deleteProduct(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        productRepository.delete(product);
    }

    public List<ProductDto> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream().map(product -> modelMapper.map(product, ProductDto.class))
                .collect(Collectors.toList());
    }

    public ProductDto getProductById(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("No product found with given Id!"));
        return modelMapper.map(product, ProductDto.class);
    }

    public CategoryDto addCategory(CategoryDto categoryDto) {
        Category category = modelMapper.map(categoryDto, Category.class);
        Category savedCategory = categoryRepository.save(category);
        return modelMapper.map(savedCategory, CategoryDto.class);
    }

    public CategoryDto updateCategory(Long categoryId, CategoryDto categoryDto) {
        Category existingCategory = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
        modelMapper.map(categoryDto, existingCategory);
        Category updatedCategory = categoryRepository.save(existingCategory);
        return modelMapper.map(updatedCategory, CategoryDto.class);
    }

    public void deleteCategory(Long categoryId) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
        categoryRepository.delete(category);
    }

    public List<CategoryDto> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        return categories.stream().map(category -> modelMapper.map(category, CategoryDto.class))
                .collect(Collectors.toList());
    }
}
