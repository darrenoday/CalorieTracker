package com.example.demo.repository;

import com.example.demo.entity.Food;
import com.example.demo.entity.FoodFact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodFactRepository extends JpaRepository<FoodFact, Long> {

    @Query(value = "SELECT * FROM food_facts ff WHERE " +
            "EXISTS (SELECT 1 FROM food f WHERE INSTR(LOWER(ff.fact), LOWER(f.name)) > 0)",
            nativeQuery = true)
    List<FoodFact> findByFactContainingFoodNames();
}