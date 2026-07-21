package com.indusai.backend.controller;

import com.indusai.backend.model.Document;
import com.indusai.backend.service.DocumentService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DocumentController {

    private final DocumentService documentService;

    public DocumentController(DocumentService documentService) {
        this.documentService = documentService;
    }

    @GetMapping("/api/documents")
    public List<Document> getDocuments() {
        return documentService.getAllDocuments();
    }

    @DeleteMapping("/api/documents/{id}")
    public void deleteDocument(@PathVariable String id) {
        documentService.deleteDocument(id);
    }

    @GetMapping("/api/document-names")
public List<String> getDocumentNames() {

    return documentService
            .getAllDocuments()
            .stream()
            .map(Document::getFileName)
            .toList();

}
}