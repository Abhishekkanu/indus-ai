package com.indusai.backend.controller;

import com.indusai.backend.model.Document;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DocumentController {

    @GetMapping("/api/documents")
    public List<Document> getDocuments() {

        return List.of(

                new Document(
                        1L,
                        "Pump_Manual.pdf",
                        "Ready"
                ),

                new Document(
                        2L,
                        "Safety_Report.pdf",
                        "Processing"
                ),

                new Document(
                        3L,
                        "Inspection.pdf",
                        "OCR Running"
                )

        );

    }

}