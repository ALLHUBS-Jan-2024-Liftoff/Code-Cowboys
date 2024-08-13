package org.launchcode.ranchsupply.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.launchcode.ranchsupply.model.User;
import org.launchcode.ranchsupply.model.dto.LoginFormDTO;
import org.launchcode.ranchsupply.model.dto.RegisterFormDTO;
import org.launchcode.ranchsupply.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class AuthenticationController {
    @Autowired
    UserRepository userRepository;

    private static final String userSessionKey = "user";

    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(Long.valueOf(userId));

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getUserId());
    }

    @GetMapping("/all")
    public List<User> getAllUsers(){

        return (List<User>) userRepository.findAll();
    }


    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> processRegistrationForm(@RequestBody @Valid RegisterFormDTO registerFormDTO,
                                                                       HttpServletRequest request) {
        Map<String, String> responseBody = new HashMap<>();
        try {
            User existingUser = userRepository.findByUsername(registerFormDTO.getUsername());
            if (existingUser == null && !registerFormDTO.getUsername().isEmpty() && !registerFormDTO.getPassword().isEmpty()) {
                User newUser = new User(registerFormDTO.getUsername(), registerFormDTO.getPassword(),
                        registerFormDTO.getFirstName(), registerFormDTO.getLastName(),
                        registerFormDTO.getEmail(), registerFormDTO.getPhoneNumber(),
                        registerFormDTO.getAddress(), registerFormDTO.getCity(), registerFormDTO.getState(), registerFormDTO.getZipcode(), "user"); // Set default role to "user"
                setUserInSession(request.getSession(), newUser);
                userRepository.save(newUser);

                responseBody.put("message", "User registered successfully");
                return ResponseEntity.status(HttpStatus.CREATED).body(responseBody);
            } else if (existingUser != null) {
                responseBody.put("message", "User already exists");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
            } else if (registerFormDTO.getUsername().isEmpty()) {
                responseBody.put("message", "Username is required");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
            } else if (registerFormDTO.getPassword().isEmpty()) {
                responseBody.put("message", "Password is required");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
            }
        } catch (Exception ex) {
            responseBody.put("message", "An error occurred: " + ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseBody);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> processLoginForm(@RequestBody @Valid LoginFormDTO loginFormDTO,
                                                                HttpServletRequest request) {
        Map<String, String> responseBody = new HashMap<>();
        User theUser = userRepository.findByUsername(loginFormDTO.getUsername());
        String password = loginFormDTO.getPassword();

        if (theUser == null) {
            responseBody.put("message", "Username does not exist");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
        } else if (!theUser.isMatchingPassword(password)) {
            responseBody.put("message", "Password is incorrect");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
        } else {
            setUserInSession(request.getSession(), theUser);
            responseBody.put("message", "User logged in successfully");
            responseBody.put("username", theUser.getUsername());
            return ResponseEntity.status(HttpStatus.OK).body(responseBody);
        }
    }

    @GetMapping("/currentUser")
    public ResponseEntity<?> getCurrentUser(HttpSession session) {
        User user = getUserFromSession(session);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not logged in");
        }
        return ResponseEntity.ok(user);
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request){
        request.getSession().invalidate();
        return "redirect:/login";

    }

    @PostMapping("/delete")
    public void deleteUser(@RequestParam Integer userId){
        userRepository.deleteById(Long.valueOf(userId));
    }
    @GetMapping("/debug-session")
    public ResponseEntity<?> debugSession(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            return ResponseEntity.ok("Session ID: " + session.getId() + ", User: " + getUserFromSession(session));
        } else {
            return ResponseEntity.ok("No active session");
        }
    }
}
