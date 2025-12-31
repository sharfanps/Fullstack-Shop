package com.like2shop;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="signIn")
public class signInModel {
        @Id
        @GeneratedValue(strategy=GenerationType.IDENTITY)
        long id;
        @Column(name="email")
        String email;
        @Column(name="password")
        String password;
}

