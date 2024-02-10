package com.sachin.angularspringbootthogakade.api.repo;

import com.sachin.angularspringbootthogakade.api.entity.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, String> {
    Page<Customer> findAllByIsDeletedFalse(Pageable pageable);


}
