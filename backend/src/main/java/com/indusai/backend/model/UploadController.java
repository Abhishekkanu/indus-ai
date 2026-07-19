package com.indusai.backend.controller;

import com.indusai.backend.model.UploadResponse;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api")
public class UploadController {

    private static final String UPLOAD_DIR =
        System.getProperty("user.dir") + "/uploads/";

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public UploadResponse uploadFile(
            @RequestParam("file") MultipartFile file) {

        try {

            File directory = new File(UPLOAD_DIR);

            if (!directory.exists()) {
                directory.mkdirs();
            }

            File destination = new File(UPLOAD_DIR + file.getOriginalFilename());

            file.transferTo(destination);

            return new UploadResponse(
                    file.getOriginalFilename(),
                    "File uploaded successfully!"
            );

        } catch (IOException e) {

    e.printStackTrace();

    return new UploadResponse(
            "",
            "Upload Failed"
    );

}

    }

}