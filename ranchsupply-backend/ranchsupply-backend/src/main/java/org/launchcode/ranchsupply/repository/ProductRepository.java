package org.launchcode.ranchsupply.repository;

import org.launchcode.ranchsupply.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
