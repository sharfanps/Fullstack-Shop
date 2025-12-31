package com.like2shop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.Clock;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class signInController {

    @Autowired
    private UserRepository userRepository;
    @PostMapping("/signup")
    public Map<String,String> signup(@RequestBody SignIn dto) {

        // Check if email already exists
        System.out.println("Reached Controller"+dto);
        if (userRepository.findByEmail(dto.getEmail()) != null) {
            return Map.of("message","Email already in use");
        }

        signInModel user=new signInModel();
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        
        userRepository.save(user);

        return Map.of("message","User registered successfully");
    }
}
