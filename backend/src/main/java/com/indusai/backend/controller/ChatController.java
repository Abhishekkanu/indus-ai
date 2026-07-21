package com.indusai.backend.controller;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    private final RestTemplate restTemplate = new RestTemplate();

    @PostMapping
    public Object chat(@RequestBody Map<String, String> body) {

        String pythonUrl = "http://localhost:8000/chat";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, String>> request =
                new HttpEntity<>(body, headers);

        ResponseEntity<Map> response =
                restTemplate.postForEntity(
                        pythonUrl,
                        request,
                        Map.class
                );

        return response.getBody();
    }
}