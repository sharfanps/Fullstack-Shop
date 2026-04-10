package com.like2shop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.Clock;
import java.util.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class signInController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public signInController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }
    @PostMapping("/signup")
    public Map<String,String> signup(@RequestBody SignIn dto) {

        // Check if email already exists

        if (userRepository.findByEmail(dto.getEmail()) != null) {
            return Map.of("message","Email already in use");
        }

        signInModel user=new signInModel();
        user.setEmail(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        
        userRepository.save(user);

        return Map.of("message","User registered successfully");
    }
    @PostMapping("/login")
    public Map<String,String> login(@RequestBody SignIn dto){
        System.out.println("Reached login Controller"+dto);
        signInModel user=userRepository.findByEmail(dto.getEmail());
        String Token=jwtUtil.generateToken(dto.getEmail());
        System.out.println("token in  controller login : "+Token);
        if (user==null)
        {
            return Map.of("error","User Not Found");
        }
        if(!passwordEncoder.matches(dto.getPassword(), user.getPassword()))
        {
            return Map.of("error","Invalid Password");
        }
        return Map.of("token",Token);

    }
    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
        return ResponseEntity.ok("Logged out successfully");
    }

}
