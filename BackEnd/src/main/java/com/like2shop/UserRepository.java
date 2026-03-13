package com.like2shop;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<signInModel, Long> {
        signInModel findByEmail(String email);

}
