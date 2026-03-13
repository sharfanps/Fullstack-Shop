package com.like2shop;

import jakarta.persistence.*;
import jdk.jfr.Enabled;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="products")
public class ProductModel {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;
//        @Column(name="name")
        private String name;
//        @Column(name="price")
        private Double price;



}
