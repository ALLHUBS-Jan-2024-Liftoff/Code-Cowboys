package org.launchcode.ranchsupply.repository;

import org.launchcode.ranchsupply.model.Cart;
import org.launchcode.ranchsupply.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Long> {
    Optional<Cart> findByUser(User user);
}
