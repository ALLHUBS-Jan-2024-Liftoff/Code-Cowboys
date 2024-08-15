package org.launchcode.ranchsupply.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.launchcode.ranchsupply.exception.ResourceNotFoundException;
import org.launchcode.ranchsupply.model.User;
import org.launchcode.ranchsupply.model.dto.LoginFormDTO;
import org.launchcode.ranchsupply.model.dto.RegisterFormDTO;
import org.launchcode.ranchsupply.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("user")
//@CrossOrigin(origins = "http://localhost:5173")
public class AuthenticationController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
//    private ModelMapper modelMapper;
    private static final String userSessionKey = "user";

    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(userId);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }

    @PostMapping(value= "/register" )
    public ResponseEntity<Map> processRegistrationForm(@RequestBody RegisterFormDTO registerFormDTO,
                                                       HttpServletRequest request)  {
        ResponseEntity response = null;
        Map<String, String> responseBody = new HashMap<>();
        try{
            User existingUser = userRepository.findByUsername(registerFormDTO.getUsername());
            if (existingUser == null && !registerFormDTO.getUsername().isEmpty() && !registerFormDTO.getPassword().isEmpty()){
                responseBody.put("message", "Given user details are successfully registered");
                response = ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body(responseBody);
                User newUser = new User(registerFormDTO.getUsername(), registerFormDTO.getPassword(), registerFormDTO.getFirstName(), registerFormDTO.getLastName(), registerFormDTO.getEmail(), registerFormDTO.getPhoneNumber(), registerFormDTO.getAddress(), registerFormDTO.getZipCode(),registerFormDTO.getCity(),registerFormDTO.getState(),registerFormDTO.getRole());
                setUserInSession(request.getSession(), newUser);
                userRepository.save(newUser);
            } else if(existingUser != null) {
                responseBody.put("message", "User Already Exists.");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
            } else if(registerFormDTO.getUsername().isEmpty()) {
                responseBody.put("message", "Username required.");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
            } else if (registerFormDTO.getPassword().isEmpty()) {
                responseBody.put("message", "Password required");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
            }
        }catch (Exception ex){
            responseBody.put("message", "An exception occurred due to " + ex.getMessage());
            response = ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(responseBody);
        }
        return response;
    }

    @PostMapping("/login")
    public ResponseEntity<RegisterFormDTO> processLoginForm(@RequestBody LoginFormDTO loginFormDTO, HttpServletRequest request) {

        ResponseEntity response = null;
        Map<String, String> responseBody = new HashMap<>();
        User theUser = userRepository.findByUsername(loginFormDTO.getUsername());
        String password = loginFormDTO.getPassword();
        if (theUser == null) {
            responseBody.put("message", "Username does not exist");
            response = ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(responseBody);
        }else if (!theUser.isMatchingPassword(password)) {
            responseBody.put("message", "Password does not match");
            response = ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(responseBody);
        } else {
            setUserInSession(request.getSession(), theUser);
//            responseBody.put("message", "User successfully logged in.");
//            responseBody.put("userId", theUser.getId());
//            responseBody.put("username", theUser.getUsername());
//            responseBody.put("userRole", theUser.getRole());
//            response = ResponseEntity
//                    .status(HttpStatus.CREATED)
//                    .body(responseBody);
            RegisterFormDTO registerFormDTO = modelMapper.map(theUser,RegisterFormDTO.class);
            response = new ResponseEntity<RegisterFormDTO>(registerFormDTO, HttpStatus.OK);
        }
        return  response;
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request){
        request.getSession().invalidate();
        return "redirect:/login";
    }
    //	Get a user by user id
    @GetMapping("/{id}")
    public ResponseEntity<RegisterFormDTO> getUserById(@PathVariable Integer id) {
        // Return the user in a ResponseEntity with HttpStatus.OK
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No user found"));
        RegisterFormDTO registerFormDTO = modelMapper.map(user,RegisterFormDTO.class);
        return new ResponseEntity<RegisterFormDTO>(registerFormDTO, HttpStatus.OK);
    }

    //get all the users

    //delete user

    //update user details

}
