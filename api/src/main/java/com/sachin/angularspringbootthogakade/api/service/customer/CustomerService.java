package com.sachin.angularspringbootthogakade.api.service.customer;

import com.sachin.angularspringbootthogakade.api.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    String createCustomer(CustomerDTO customerDTO);
    CustomerDTO getCustomer(String customerId);
    List<CustomerDTO> getAll();
    void updateCustomer(String customerId, CustomerDTO customerDTO);
    void deleteCustomer(String customerId);
}
