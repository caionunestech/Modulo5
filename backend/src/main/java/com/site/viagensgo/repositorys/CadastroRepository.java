package com.site.viagensgo.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.viagensgo.entities.Cadastro;

@Repository
public interface CadastroRepository extends JpaRepository<Cadastro, Long> {

}
