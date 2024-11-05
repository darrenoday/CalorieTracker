package com.example.demo.controller;

import com.example.demo.entity.FoodEntry;
import com.example.demo.entity.User;
import com.example.demo.service.FoodEntryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/entries")
public class FoodEntryController {

    private final FoodEntryService foodEntryService;

    public FoodEntryController(FoodEntryService foodEntryService) {
        this.foodEntryService = foodEntryService;
    }

    @GetMapping("/{userId}/{date}")
    public ResponseEntity<?> getEntriesByDate(@PathVariable Long userId, @PathVariable String date) {
        User user = new User();
        user.setId(userId);

        List<FoodEntry> entries = foodEntryService.getFoodEntriesByDate(user, LocalDate.parse(date));
        int totalCalories = foodEntryService.calculateTotalCalories(entries);

        return ResponseEntity.ok("Total calories for " + date + ": " + totalCalories);
    }
}