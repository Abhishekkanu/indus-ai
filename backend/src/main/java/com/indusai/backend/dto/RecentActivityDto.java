package com.indusai.backend.dto;

public class RecentActivityDto {

    private String fileName;
    private String status;

    public RecentActivityDto(String fileName, String status) {
        this.fileName = fileName;
        this.status = status;
    }

    public String getFileName() {
        return fileName;
    }

    public String getStatus() {
        return status;
    }
}