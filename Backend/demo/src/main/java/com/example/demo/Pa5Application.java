package com.example.demo;

import com.example.demo.persistence.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class Pa5Application implements CommandLineRunner {

	@Autowired
	UsuarioRepository usuarioRepository;


	public static void main(String[] args) {
		SpringApplication.run(Pa5Application.class, args);


	}

	@Override
	public void run(String... args) throws Exception {
		usuarioRepository.findAll().forEach(System.out::println);



	}




}
