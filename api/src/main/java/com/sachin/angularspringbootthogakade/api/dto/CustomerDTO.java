package com.sachin.angularspringbootthogakade.api.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CustomerDTO {
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private String id;
    private String name;
    private String address;
    private boolean isDeleted;
}
