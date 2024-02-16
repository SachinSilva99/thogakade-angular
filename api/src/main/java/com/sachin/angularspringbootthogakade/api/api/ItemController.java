package com.sachin.angularspringbootthogakade.api.api;

import com.sachin.angularspringbootthogakade.api.dto.ItemDTO;
import com.sachin.angularspringbootthogakade.api.service.ItemService;
import com.sachin.angularspringbootthogakade.api.util.StandardResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/items", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
@CrossOrigin(origins = "*",allowedHeaders="*")

public class ItemController {
    private final ItemService itemService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<StandardResponse<String>> createItem(@RequestBody ItemDTO itemDTO) {
        String itemId = itemService.createItem(itemDTO);
        StandardResponse<String> standardResponse = new StandardResponse<>(
                HttpStatus.CREATED.value(),
                "Item Created",
                itemId);
        return new ResponseEntity<>(standardResponse, HttpStatus.CREATED);
    }
}
