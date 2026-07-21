package com.indusai.backend.controller;

import com.indusai.backend.repository.DocumentRepository;
import com.indusai.backend.service.DocumentService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class DashboardController {

    private final DocumentRepository repository;
    private final DocumentService documentService;

    public DashboardController(DocumentRepository repository,
                               DocumentService documentService) {
        this.repository = repository;
        this.documentService = documentService;
    }

    @GetMapping("/api/dashboard")
    public Map<String, Object> dashboard() {

        Map<String, Object> map = new LinkedHashMap<>();

        map.put("documents", repository.count());
        map.put("equipment", 52);
        map.put("aiQueries", 983);
        map.put("compliance", "96%");
        map.put("recent", documentService.getRecentDocuments());

        return map;
    }

    
}