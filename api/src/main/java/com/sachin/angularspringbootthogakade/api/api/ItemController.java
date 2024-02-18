package com.sachin.angularspringbootthogakade.api.api;

import com.sachin.angularspringbootthogakade.api.dto.ItemDTO;
import com.sachin.angularspringbootthogakade.api.service.ItemService;
import com.sachin.angularspringbootthogakade.api.util.StandardResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/items", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")

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

    @PutMapping(value = "/{itemId}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<StandardResponse<String>> updateCustomer(
            @RequestBody ItemDTO itemDTO,
            @PathVariable String itemId) {
        itemService.updateItem(itemId, itemDTO);
        return new ResponseEntity<>(new StandardResponse<>(), HttpStatus.NO_CONTENT);
    }

    @GetMapping(value = "/{itemId}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<StandardResponse<ItemDTO>> getCustomer(@PathVariable String itemId) {
        ItemDTO itemDTO = itemService.getItem(itemId);
        StandardResponse<ItemDTO> standardResponse = StandardResponse
                .<ItemDTO>builder()
                .statusCode(HttpStatus.OK.value())
                .data(itemDTO)
                .message("OK")
                .build();
        return new ResponseEntity<>(standardResponse, HttpStatus.OK);
    }

    @DeleteMapping("/{itemId}")
    public ResponseEntity<StandardResponse<String>> deleteCustomer(@PathVariable String itemId) {
        itemService.deleteItem(itemId);
        return new ResponseEntity<>(new StandardResponse<>(), HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public ResponseEntity<StandardResponse<Page<ItemDTO>>> getAllCustomer(@RequestParam int pageSize, @RequestParam int pageNumber) {
        Page<ItemDTO> customerPage = itemService.getAll(pageNumber, pageSize);
        StandardResponse<Page<ItemDTO>> standardResponse = StandardResponse
                .<Page<ItemDTO>>builder()
                .statusCode(HttpStatus.OK.value())
                .data(customerPage)
                .message("OK")
                .build();
        return new ResponseEntity<>(standardResponse, HttpStatus.OK);
    }
}
