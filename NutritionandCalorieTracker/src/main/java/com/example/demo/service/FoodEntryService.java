package com.example.demo.service;

import com.example.demo.entity.FoodEntry;
import com.example.demo.entity.User;
import com.example.demo.repository.FoodEntryRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class FoodEntryService {

    private final FoodEntryRepository foodEntryRepository;

    public FoodEntryService(FoodEntryRepository foodEntryRepository) {
        this.foodEntryRepository = foodEntryRepository;
    }

    public List<FoodEntry> getFoodEntriesByDate(User user, LocalDate date) {
        return foodEntryRepository.findByUserAndDate(user, date);
    }

    public int calculateTotalCalories(List<FoodEntry> entries) {
        return entries.stream().mapToInt(entry -> entry.getFood().getCalories()).sum();
    }
}