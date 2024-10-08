package org.launchcode.ranchsupply.repository;

import org.launchcode.ranchsupply.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByTitleContaining(String searchTerm);
}

