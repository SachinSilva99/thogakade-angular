package com.sachin.angularspringbootthogakade.api.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Item implements SuperEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private int qty;
    @Column(nullable = false)
    private double price;
    @Column(nullable = false)
    private boolean isDeleted;
}
