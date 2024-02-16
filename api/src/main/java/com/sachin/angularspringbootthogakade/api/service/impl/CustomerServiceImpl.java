package com.sachin.angularspringbootthogakade.api.service.impl;

import com.sachin.angularspringbootthogakade.api.dto.CustomerDTO;
import com.sachin.angularspringbootthogakade.api.entity.Customer;
import com.sachin.angularspringbootthogakade.api.exceptions.NotFoundException;
import com.sachin.angularspringbootthogakade.api.repo.CustomerRepo;
import com.sachin.angularspringbootthogakade.api.service.CustomerService;
import com.sachin.angularspringbootthogakade.api.util.Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

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
    public Page<CustomerDTO> getAll(int pageNumber, int pageSize) {
        Page<Customer> allCustomers = customerRepo.findAllByIsDeletedFalse(PageRequest.of(pageNumber, pageSize));
        return allCustomers.map(mapper::toCustomerDto);
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
        Customer customer = customerRepo
                .findById(customerId)
                .orElseThrow(() -> new NotFoundException("customer Id:  " + customerId + " not found"));
        if (customer.isDeleted()) {
            throw new NotFoundException("customer Id:  " + customerId + " not found");
        }
        return customer;
    }
}
