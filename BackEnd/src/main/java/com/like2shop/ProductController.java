package com.like2shop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private  ProductRepository productRepository;
        @GetMapping("/getList")
        public ResponseEntity<List<ProductModel>> getList(){
            try {
                List<ProductModel> responses = new ArrayList<>();
                responses=productRepository.findAll();
                System.out.println("pro List responses: "+responses);
                return ResponseEntity.ok(responses);
            } catch (Exception e) {
                return ResponseEntity
                        .status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(Collections.emptyList());
            }
        }

}
