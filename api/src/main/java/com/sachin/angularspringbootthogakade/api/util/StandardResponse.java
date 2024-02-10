package com.sachin.angularspringbootthogakade.api.util;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class StandardResponse <T>{
    private int statusCode;
    private String message;
    private T data;

}
