package org.launchcode.ranchsupply.repository;

import org.launchcode.ranchsupply.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);
    // This method finds a user by email
    Optional<User> findByEmail(String email);
}
