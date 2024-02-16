package com.sachin.angularspringbootthogakade.api.service;

import com.sachin.angularspringbootthogakade.api.dto.CustomerDTO;
import com.sachin.angularspringbootthogakade.api.entity.Customer;
import org.springframework.data.domain.Page;

import java.util.List;

public interface CustomerService {
    String createCustomer(CustomerDTO customerDTO);
    CustomerDTO getCustomer(String customerId);
    Page<CustomerDTO> getAll(int pageNumber, int pageSize);
    void updateCustomer(String customerId, CustomerDTO customerDTO);
    void deleteCustomer(String customerId);
}
