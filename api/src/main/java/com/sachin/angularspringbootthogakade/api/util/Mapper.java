package com.sachin.angularspringbootthogakade.api.util;

import com.sachin.angularspringbootthogakade.api.dto.CustomerDTO;
import com.sachin.angularspringbootthogakade.api.dto.ItemDTO;
import com.sachin.angularspringbootthogakade.api.entity.Customer;
import com.sachin.angularspringbootthogakade.api.entity.Item;

public interface Mapper {
    CustomerDTO toCustomerDto(Customer customer);
    Customer toCustomer(CustomerDTO customerDTO);
    ItemDTO toItemDto(Item item);
    Item toItem(ItemDTO itemDTO);
}
