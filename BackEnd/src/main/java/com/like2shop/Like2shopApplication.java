package com.like2shop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Like2shopApplication {

    public static void main(String[] args) {
        System.out.println("DS URL = " + System.getenv("SPRING_DATASOURCE_URL"));
        SpringApplication.run(Like2shopApplication.class, args);
    }

}
