package org.launchcode.ranchsupply.repository;

import org.launchcode.ranchsupply.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
