package com.sachin.angularspringbootthogakade.api.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ItemDTO {
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private String id;
    private String description;
    private int qty;
    private double price;
}
