package org.launchcode.ranchsupply.repository;

import org.launchcode.ranchsupply.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Long> {
    List<Order> findByUserId(Integer userId);
}
