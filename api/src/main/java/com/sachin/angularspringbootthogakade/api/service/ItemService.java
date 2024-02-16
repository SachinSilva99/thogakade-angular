package com.sachin.angularspringbootthogakade.api.service;

import com.sachin.angularspringbootthogakade.api.dto.ItemDTO;
import org.springframework.data.domain.Page;

public interface ItemService {
    String createItem(ItemDTO itemDTO);
    ItemDTO getItem(String itemId);
    Page<ItemDTO> getAll(int pageNumber, int pageSize);
    void updateItem(String itemId, ItemDTO itemDTO);
    void deleteItem(String itemId);
}
