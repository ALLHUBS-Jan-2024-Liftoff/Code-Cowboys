package org.launchcode.ranchsupply.repository;

import org.launchcode.ranchsupply.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
