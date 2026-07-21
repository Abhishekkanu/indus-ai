package com.indusai.backend.model;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@org.springframework.data.mongodb.core.mapping.Document(collection = "documents")
public class Document {

    @Id
    private String id;

    private String fileName;

    private String status;

    private Long fileSize;

    private String fileType;

    private LocalDateTime uploadTime;

    public Document() {
    }

    public Document(String fileName,
                    String status,
                    Long fileSize,
                    String fileType,
                    LocalDateTime uploadTime) {

        this.fileName = fileName;
        this.status = status;
        this.fileSize = fileSize;
        this.fileType = fileType;
        this.uploadTime = uploadTime;
    }

    // ---------- Getters & Setters ----------

    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public Long getFileSize() {
        return fileSize;
    }

    public void setFileSize(Long fileSize) {
        this.fileSize = fileSize;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public LocalDateTime getUploadTime() {
        return uploadTime;
    }

    public void setUploadTime(LocalDateTime uploadTime) {
        this.uploadTime = uploadTime;
    }
}