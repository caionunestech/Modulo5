package com.site.viagensgo;
import org.springframework.jdbc.core.JdbcTemplate; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.site.viagensgo.repositorys.CadastroRepository;
 


@SpringBootApplication
public class ViagensGoApplication implements CommandLineRunner {
	
	@Autowired
	private CadastroRepository cadastroRepository; 
	
	
	public static void main(String[] args) {
		SpringApplication.run(ViagensGoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
				
	}

}
