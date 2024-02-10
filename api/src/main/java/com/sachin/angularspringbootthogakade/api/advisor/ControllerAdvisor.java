package com.sachin.angularspringbootthogakade.api.advisor;

import com.sachin.angularspringbootthogakade.api.exceptions.NotFoundException;
import com.sachin.angularspringbootthogakade.api.util.StandardResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ControllerAdvisor {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<StandardResponse> handleConstraintViolationException(NotFoundException e) {
        return new ResponseEntity<>(
                new StandardResponse(
                        HttpStatus.BAD_REQUEST.value(), e.getMessage(), null
                ),
                HttpStatus.BAD_REQUEST);
    }
}
