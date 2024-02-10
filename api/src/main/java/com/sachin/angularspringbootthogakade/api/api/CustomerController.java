package com.sachin.angularspringbootthogakade.api.api;

import com.sachin.angularspringbootthogakade.api.dto.CustomerDTO;
import com.sachin.angularspringbootthogakade.api.service.customer.CustomerService;
import com.sachin.angularspringbootthogakade.api.util.StandardResponse;
import lombok.RequiredArgsConstructor;
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
        return new ResponseEntity<>(
                new StandardResponse<>(
                        HttpStatus.CREATED.value(),
                        "customer created successfully",
                        customerId
                ), HttpStatus.CREATED);
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
        return new ResponseEntity<>(
                new StandardResponse<>(
                        HttpStatus.OK.value(),
                        "customer created successfully",
                        customerDTO
                ), HttpStatus.OK);
    }

    @DeleteMapping("/{customerId}")
    public ResponseEntity<StandardResponse<String>> deleteCustomer(@PathVariable String customerId) {
        customerService.deleteCustomer(customerId);
        return new ResponseEntity<>(new StandardResponse<>(), HttpStatus.NO_CONTENT);
    }

    @GetMapping()
    public ResponseEntity<StandardResponse<List<CustomerDTO>>> getAllCustomer() {
        List<CustomerDTO> customerDTOList = customerService.getAll();
        return new ResponseEntity<>(
                new StandardResponse<>(
                        HttpStatus.OK.value(),
                        "customer created successfully",
                        customerDTOList
                ), HttpStatus.OK);
    }
}
