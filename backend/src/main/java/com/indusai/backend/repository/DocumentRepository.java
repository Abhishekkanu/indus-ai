package com.indusai.backend.repository;

import com.indusai.backend.model.Document;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DocumentRepository
        extends MongoRepository<Document, String> {

}