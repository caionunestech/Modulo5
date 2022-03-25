import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CadastroService from "../../services/CadastroService";

export default function Create() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [destino, setDestino] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarCadastro = (e) => {
    e.preventDefault();

    const cadastro = { nome, sobrenome,destino, email};

    if (id) {
        CadastroService.updateCadastro(id, cadastro)
        .then((response) => {
            navigate("/Cadastro")
        })

    } else {
        CadastroService.createCadastro(cadastro)
        .then((response) => {
            navigate("/Cadastro")
        })
    }
  }

  useEffect(() => {
      function getCadastroById() {
        if (id) {
            CadastroService.getCadastroById(id)
            .then((response) => {
                setNome(response.data.nome);
                setSobrenome(response.data.sobrenome);
                setDestino(response.data.destino);
                setEmail(response.data.email);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getCadastroById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Sobrenome" className="form-label">
              Sobrenome
            </label>
            <input
              type="text"
              id="Sobrenome"
              className="form-control"
              placeholder="Sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Destino" className="form-label">
              Destino
            </label>
            <input
              type="text"
              id="Destino"
              className="form-control"
              placeholder="Destino"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="Email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarCadastro(e)}>
            Enviar
          </button>
          <Link
            to="/Cadastro"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
