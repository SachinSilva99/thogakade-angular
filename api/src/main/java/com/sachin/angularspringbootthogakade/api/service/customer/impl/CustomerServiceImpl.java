package com.sachin.angularspringbootthogakade.api.service.customer.impl;

import com.sachin.angularspringbootthogakade.api.CustomerRepo;
import com.sachin.angularspringbootthogakade.api.dto.CustomerDTO;
import com.sachin.angularspringbootthogakade.api.entity.Customer;
import com.sachin.angularspringbootthogakade.api.exceptions.NotFoundException;
import com.sachin.angularspringbootthogakade.api.service.customer.CustomerService;
import com.sachin.angularspringbootthogakade.api.util.Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepo customerRepo;
    private final Mapper mapper;

    @Override
    public String createCustomer(CustomerDTO customerDTO) {
        Customer customer = mapper.toCustomer(customerDTO);
        return customerRepo.save(customer).getId();
    }

    @Override
    public CustomerDTO getCustomer(String customerId) {
        Customer customer = getCustomerById(customerId);
        return mapper.toCustomerDto(customer);
    }


    @Override
    public List<CustomerDTO> getAll() {
        return customerRepo.findAll().stream().map(mapper::toCustomerDto).toList();
    }

    @Override
    public void updateCustomer(String customerId, CustomerDTO customerDTO) {
        Customer customer = getCustomerById(customerId);
        customer.setName(customerDTO.getName());
        customer.setAddress(customerDTO.getAddress());
        customerRepo.save(customer);
    }

    @Override
    public void deleteCustomer(String customerId) {
        Customer customer = getCustomerById(customerId);
        customer.setDeleted(true);
        customerRepo.save(customer);
    }
    private Customer getCustomerById(String customerId) {
        return customerRepo
                .findById(customerId)
                .orElseThrow(() -> new NotFoundException("customer Id:  " + customerId + " not found"));
    }
}
