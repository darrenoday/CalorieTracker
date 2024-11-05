package com.example.demo.controller;


import com.example.demo.entity.Food;
import com.example.demo.repository.FoodRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/foods")
public class FoodController {

    private final FoodRepository foodRepository;

    public FoodController(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    @PostMapping
    public ResponseEntity<Food> addFood(@RequestBody Food food) {
        return ResponseEntity.ok(foodRepository.save(food));
    }

    @GetMapping
    public ResponseEntity<List<Food>> getAllFoods() {
        return ResponseEntity.ok(foodRepository.findAll());
    }
}
