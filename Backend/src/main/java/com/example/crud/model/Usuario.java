package com.example.crud.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="usuarios")

public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nombre;
    private String email;
}
