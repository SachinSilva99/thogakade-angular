package com.sachin.angularspringbootthogakade.api.util;

import com.sachin.angularspringbootthogakade.api.dto.CustomerDTO;
import com.sachin.angularspringbootthogakade.api.entity.Customer;

public interface Mapper {
    CustomerDTO toCustomerDto(Customer customer);
    Customer toCustomer(CustomerDTO customerDTO);
}
