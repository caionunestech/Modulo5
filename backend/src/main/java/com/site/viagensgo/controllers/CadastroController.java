package com.site.viagensgo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.site.viagensgo.entities.Cadastro;
import com.site.viagensgo.repositorys.CadastroRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/cadastro")
public class CadastroController {
	
	@Autowired
	private CadastroRepository cadastroRepository;
	
	// GET
	@GetMapping
	public ResponseEntity<List<Cadastro>> findAll() {
		
		List<Cadastro> cadastros = cadastroRepository.findAll();
		
		return ResponseEntity.ok().body(cadastros);
	}
	
	// GET por id
	@GetMapping(value = "/{id}")
	public ResponseEntity<Cadastro> findById(@PathVariable Long id) {
		
		Cadastro cadastro = cadastroRepository.findById(id).get();
		
		return ResponseEntity.ok().body(cadastro);
	}
	
	// CREATE
    @PostMapping
    public Cadastro create(@RequestBody Cadastro cadastro) {
    	
        return cadastroRepository.save(cadastro);
    }
    
    // UPDATE
    @PutMapping("{id}")
    public ResponseEntity<Cadastro> update(@PathVariable long id,@RequestBody Cadastro cadastroDetails) {
    	Cadastro updateCadastro = cadastroRepository.findById(id).get();

    	updateCadastro.setNome(cadastroDetails.getNome());
    	updateCadastro.setSobrenome(cadastroDetails.getSobrenome());
    	updateCadastro.setDestino(cadastroDetails.getDestino());
    	updateCadastro.setEmail(cadastroDetails.getEmail());

        cadastroRepository.save(updateCadastro);

        return ResponseEntity.ok(updateCadastro);
    }

    // DELETE
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {

    	Cadastro cadastro = cadastroRepository.findById(id).get();

    	cadastroRepository.delete(cadastro);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
    
}
