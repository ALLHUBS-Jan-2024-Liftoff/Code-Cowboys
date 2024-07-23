package org.launchcode.ranchsupply.repository;

import org.launchcode.ranchsupply.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
