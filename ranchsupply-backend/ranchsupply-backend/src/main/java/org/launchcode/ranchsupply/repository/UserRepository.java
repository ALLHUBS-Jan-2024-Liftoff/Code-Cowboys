package org.launchcode.ranchsupply.repository;
import org.launchcode.ranchsupply.model.Role;
import org.launchcode.ranchsupply.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Long> {

    User findByUsername(String userName);

    User findByEmail(String email);

    User findByPhoneNumber(String phoneNumber);

    User findByUserId(Long userId);

    User findByRole(Role role);

}