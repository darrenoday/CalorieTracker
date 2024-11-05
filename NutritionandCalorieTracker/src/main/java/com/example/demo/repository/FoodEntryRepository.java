package com.example.demo.repository;


import com.example.demo.entity.FoodEntry;
import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface FoodEntryRepository extends JpaRepository<FoodEntry, Long> {
    List<FoodEntry> findByUserAndDate(User user, LocalDate date);
}
