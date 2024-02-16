package com.sachin.angularspringbootthogakade.api.repo;

import com.sachin.angularspringbootthogakade.api.entity.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepo extends JpaRepository<Item, String> {
    Page<Item> findAllByIsDeletedFalse(Pageable pageable);
}
