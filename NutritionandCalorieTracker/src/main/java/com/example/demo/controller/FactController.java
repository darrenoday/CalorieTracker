package com.example.demo.controller;


import com.example.demo.entity.FoodFact;
import com.example.demo.repository.FoodFactRepository;
import com.example.demo.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class FactController {

    @Autowired
    private FoodFactRepository foodFactRepository;

    @Autowired
    private FoodRepository foodRepository;

    @GetMapping("/randomFact")
    public String getRandomFact() {
        try {
            // Get all food names to search for
            List<String> foodNames = foodRepository.findAllFoodNames();
            if (foodNames.isEmpty()) {
                return "No food names available!";
            }

            // Retrieve all food facts
            List<FoodFact> allFacts = foodFactRepository.findAll();

            // Filter facts to include only those that contain a food name
            List<FoodFact> matchingFacts = allFacts.stream()
                    .filter(fact -> foodNames.stream().anyMatch(
                            foodName -> fact.getFact().toLowerCase().contains(foodName.toLowerCase())))
                    .collect(Collectors.toList());

            if (matchingFacts.isEmpty()) {
                return "No matching food facts available!";
            }

            // Pick a random fact from the filtered list
            Random random = new Random();
            int index = random.nextInt(matchingFacts.size());
            return matchingFacts.get(index).getFact();

        } catch (Exception e) {
            // Log the exception (if you have a logging mechanism) and return an error message
            e.printStackTrace();
            return "An error occurred while retrieving a random fact.";
        }
    }
}