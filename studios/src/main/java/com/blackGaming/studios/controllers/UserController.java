package com.blackGaming.studios.controllers;

import com.blackGaming.studios.dao.Match;
import com.blackGaming.studios.dao.User;
import com.blackGaming.studios.repository.MatchRepository;
import com.blackGaming.studios.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class UserController {
    @Autowired
    MatchRepository matchRepository;
    @Autowired
    UserRepository userRepository;

    @GetMapping("/userdetails/{userId}")
    public User getUserDetails(@PathVariable int userId){
        return userRepository.getUserDetails(userId);

    }

    @GetMapping("/matchdetails/{matchId}")
    public Match getMatchDetails(@PathVariable int matchId){
        return matchRepository.getMatchDetails(matchId);

    }
}
