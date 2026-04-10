package com.like2shop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private  ProductRepository productRepository;
        @GetMapping("/getList")
        public Page<ProductModel> getList(@RequestParam(defaultValue = "0") int page,
                                          @RequestParam(defaultValue = "5") int size)
        {
            try {
                Pageable pageable = PageRequest.of(page, size);
                Page<ProductModel> responses= productRepository.findAll(pageable);
                System.out.println("pro List responses: " + responses.getContent());
                return responses;
            } catch (Exception e) {
                return Page.empty();
            }
        }



}
