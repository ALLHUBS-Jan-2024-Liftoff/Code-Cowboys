package org.launchcode.ranchsupply.model;

import java.io.Serializable;
import java.util.Objects;

public class UserId implements Serializable {

    private Long userId;

    public UserId() {}

    public UserId(Long userId) {
        this.userId = userId;
    }

    // Getters and setters
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserId userId1 = (UserId) o;
        return Objects.equals(userId, userId1.userId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId);
    }
}