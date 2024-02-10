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
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<StandardResponse<String>> handleConstraintViolationException(NotFoundException e) {
        StandardResponse<String> standardResponse = StandardResponse.<String>builder()
                .message(e.getMessage())
                .statusCode(HttpStatus.NOT_FOUND.value())
                .build();
        return new ResponseEntity<>(standardResponse, HttpStatus.NOT_FOUND);
    }
}
