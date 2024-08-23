package org.launchcode.ranchsupply.repository;

import org.launchcode.ranchsupply.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // Method to search for products by title
    List<Product> findByTitleContaining(String searchTerm);

    // Corrected method to find products by category ID
    List<Product> findByCategory_CategoryId(Long categoryId);
}
