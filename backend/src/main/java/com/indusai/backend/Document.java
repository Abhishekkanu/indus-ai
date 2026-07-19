package com.indusai.backend.model;

public class Document {

    private Long id;
    private String fileName;
    private String status;

    public Document() {
    }

    public Document(Long id, String fileName, String status) {
        this.id = id;
        this.fileName = fileName;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}