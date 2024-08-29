package org.launchcode.ranchsupply.controller;

import org.launchcode.ranchsupply.model.Review;
import org.launchcode.ranchsupply.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/{productId}/user/{userId}")
    public Review addReview(@PathVariable Long productId, @PathVariable Long userId,
                            @RequestBody Review review) {
        Review addedReview = reviewService.addReview(productId, userId, review.getReviewText(), review.getRating());
        return ResponseEntity.ok(addedReview).getBody();
    }

    @GetMapping("/{productId}")
    public List<Review> getReviewsByProductId(@PathVariable Long productId) {
        return reviewService.getReviewsByProductId(productId);
    }
}
