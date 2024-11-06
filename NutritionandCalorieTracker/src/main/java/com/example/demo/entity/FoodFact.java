package com.example.demo.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class FoodFact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fact;

    @ManyToOne
    @JoinColumn(name = "food_id")
    private Food food;

    public Food getFood() {
        return food;
    }

    public String getFact() {
        return fact;
    }
}