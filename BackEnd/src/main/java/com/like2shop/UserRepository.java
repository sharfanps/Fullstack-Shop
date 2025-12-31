package com.like2shop;

import org.springframework.data.jpa.repository.JpaRepository;

    public interface UserRepository extends JpaRepository<signInModel, Long> {
        signInModel findByEmail(String email);

}
