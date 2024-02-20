package com.sachin.angularspringbootthogakade.api.service.impl;

import com.sachin.angularspringbootthogakade.api.dto.ItemDTO;
import com.sachin.angularspringbootthogakade.api.entity.Customer;
import com.sachin.angularspringbootthogakade.api.entity.Item;
import com.sachin.angularspringbootthogakade.api.exceptions.NotFoundException;
import com.sachin.angularspringbootthogakade.api.repo.ItemRepo;
import com.sachin.angularspringbootthogakade.api.service.ItemService;
import com.sachin.angularspringbootthogakade.api.util.Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {
    private final Mapper mapper;
    private final ItemRepo itemRepo;

    @Override
    public String createItem(ItemDTO itemDTO) {
        Item item = mapper.toItem(itemDTO);
        return itemRepo.save(item).getId();
    }

    @Override
    public ItemDTO getItem(String itemId) {
        Item item = getItemById(itemId);
        return mapper.toItemDto(item);
    }

    @Override
    public Page<ItemDTO> getAll(int pageNumber, int pageSize) {
        return itemRepo.findAllByIsDeletedFalse(PageRequest.of(pageNumber, pageSize)).map(mapper::toItemDto);
    }

    @Override
    public void updateItem(String itemId, ItemDTO itemDTO) {
        Item item = getItemById(itemId);
        item.setDescription(itemDTO.getDescription());
        item.setQty(itemDTO.getQty());
        item.setPrice(itemDTO.getPrice());
        itemRepo.save(item);
    }

    @Override
    public void deleteItem(String itemId) {
        Item item = getItemById(itemId);
        item.setDeleted(true);
        itemRepo.save(item);
    }

    private Item getItemById(String itemId) {
        Item item = itemRepo
                .findById(itemId)
                .orElseThrow(() -> new NotFoundException("item Id:  " + itemId + " not found"));
        if (item.isDeleted()) {
            throw new NotFoundException("Item Id:  " + itemId + " not found");
        }
        return item;
    }
}
