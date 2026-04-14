package org.example.controller;

import org.example.model.Complaint;
import org.example.repository.ComplaintRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/complaints")
public class ComplaintController {

    private final ComplaintRepository repository;

    public ComplaintController(ComplaintRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Complaint> getAllComplaints() {
        return repository.findAll();
    }

    @PostMapping
    public Complaint addComplaint(@RequestBody Complaint complaint) {
        return repository.save(complaint);
    }
}