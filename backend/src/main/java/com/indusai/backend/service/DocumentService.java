package com.indusai.backend.service;

import com.indusai.backend.model.Document;
import com.indusai.backend.repository.DocumentRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class DocumentService {

    private final DocumentRepository repository;

    public DocumentService(DocumentRepository repository) {
        this.repository = repository;
    }

    public List<Document> getAllDocuments() {
        return repository.findAll();
    }

    public List<Document> getRecentDocuments() {
        return repository.findAll();
    }

    public Document saveDocument(String fileName,
                                 Long fileSize,
                                 String fileType) {

        Document document = new Document(
                fileName,
                "Uploaded",
                fileSize,
                fileType,
                LocalDateTime.now()
        );

        return repository.save(document);
    }
    
    public void deleteDocument(String id) {
    repository.deleteById(id);
}

}