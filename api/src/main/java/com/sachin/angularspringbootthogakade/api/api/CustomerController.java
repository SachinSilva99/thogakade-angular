package com.sachin.angularspringbootthogakade.api.api;

import com.sachin.angularspringbootthogakade.api.dto.CustomerDTO;
import com.sachin.angularspringbootthogakade.api.entity.Customer;
import com.sachin.angularspringbootthogakade.api.service.customer.CustomerService;
import com.sachin.angularspringbootthogakade.api.util.StandardResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/customers", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService customerService;

    @PostMapping
    public ResponseEntity<StandardResponse<String>> createCustomer(@RequestBody CustomerDTO customerDTO) {
        String customerId = customerService.createCustomer(customerDTO);
        StandardResponse<String> standardResponse = StandardResponse
                .<String>builder()
                .statusCode(HttpStatus.CREATED.value())
                .data(customerId)
                .message("customer created successfully")
                .build();
        return new ResponseEntity<>(standardResponse, HttpStatus.CREATED);
    }

    @PutMapping("/{customerId}")
    public ResponseEntity<StandardResponse<String>> updateCustomer(
            @RequestBody CustomerDTO customerDTO,
            @PathVariable String customerId) {
        customerService.updateCustomer(customerId, customerDTO);
        return new ResponseEntity<>(new StandardResponse<>(), HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{customerId}")
    public ResponseEntity<StandardResponse<CustomerDTO>> getCustomer(@PathVariable String customerId) {
        CustomerDTO customerDTO = customerService.getCustomer(customerId);
        StandardResponse<CustomerDTO> standardResponse = StandardResponse
                .<CustomerDTO>builder()
                .statusCode(HttpStatus.OK.value())
                .data(customerDTO)
                .message("OK")
                .build();
        return new ResponseEntity<>(standardResponse, HttpStatus.OK);
    }

    @DeleteMapping("/{customerId}")
    public ResponseEntity<StandardResponse<String>> deleteCustomer(@PathVariable String customerId) {
        customerService.deleteCustomer(customerId);
        return new ResponseEntity<>(new StandardResponse<>(), HttpStatus.NO_CONTENT);
    }

    @GetMapping()
    public ResponseEntity<StandardResponse<Page<CustomerDTO>>> getAllCustomer() {
        Page<CustomerDTO> customerPage = customerService.getAll();
        StandardResponse<Page<CustomerDTO>> standardResponse = StandardResponse
                .<Page<CustomerDTO>>builder()
                .statusCode(HttpStatus.OK.value())
                .data(customerPage)
                .message("OK")
                .build();
        return new ResponseEntity<>(standardResponse, HttpStatus.OK);
    }
}
