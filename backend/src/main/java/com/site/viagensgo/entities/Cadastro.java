package com.site.viagensgo.entities;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Cadastro implements Serializable {
	
	
	@Override
	public String toString() {
		return "Cadastro [Id_cadastro=" + Id_cadastro + ", nome=" + nome + ", sobrenome=" + sobrenome + ", destino="
				+ destino + ", email=" + email + "]";
	}
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id_cadastro;
	private String nome;
	private String sobrenome;
	private String destino;
	private String email;
	
	public Long getId_cadastro() {
		return Id_cadastro;
	}
	public void setId_cadastro(Long id_cadastro) {
		Id_cadastro = id_cadastro;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getSobrenome() {
		return sobrenome;
	}
	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}
	public String getDestino() {
		return destino;
	}
	public void setDestino(String destino) {
		this.destino = destino;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}	
}
	