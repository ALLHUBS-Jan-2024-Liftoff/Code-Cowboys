package org.launchcode.ranchsupply.service;

import org.launchcode.ranchsupply.exception.ResourceNotFoundException;
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

    // Get All the products
    public List<ProductDto> getAllProducts(){
        List<Product> products = productRepository.findAll();
        return products.stream().map((product) -> modelMapper.map(product,ProductDto.class))
                .collect(Collectors.toList());
    }
    //Add a new product
    public ProductDto addProduct(ProductDto productDto) {
        Product product = modelMapper.map(productDto, Product.class);
        Product savedProduct = productRepository.save(product);
        return modelMapper.map(savedProduct, ProductDto.class);
    }

    //Search products by Product Name
    public List<ProductDto> findProductsBySearchTerm(String searchTerm){
        List<Product> products = productRepository.findByTitleContaining(searchTerm);
        return products.stream().map((product) -> modelMapper.map(product,ProductDto.class))
                .collect(Collectors.toList());
    }
    //Update in existing product

    //Delete a product with specified ID
}
