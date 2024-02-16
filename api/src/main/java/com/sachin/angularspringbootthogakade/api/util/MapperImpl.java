package com.sachin.angularspringbootthogakade.api.util;

import com.sachin.angularspringbootthogakade.api.dto.CustomerDTO;
import com.sachin.angularspringbootthogakade.api.dto.ItemDTO;
import com.sachin.angularspringbootthogakade.api.entity.Customer;
import com.sachin.angularspringbootthogakade.api.entity.Item;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MapperImpl implements Mapper {
    private final ModelMapper mapper;

    @Override
    public CustomerDTO toCustomerDto(Customer customer) {
        return mapper.map(customer, CustomerDTO.class);
    }

    @Override
    public Customer toCustomer(CustomerDTO customerDTO) {
        return mapper.map(customerDTO, Customer.class);
    }

    @Override
    public ItemDTO toItemDto(Item item) {
        return mapper.map(item, ItemDTO.class);
    }

    @Override
    public Item toItem(ItemDTO itemDTO) {
        return mapper.map(itemDTO, Item.class);
    }
}
