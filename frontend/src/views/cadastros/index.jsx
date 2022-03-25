import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CadastroService from '../../services/CadastroService'

export default function Index() {
  const [cadastros, setCadastros] = useState([])

  const getAllCadastro = () => {
    CadastroService.getAllCadastro()
      .then(response => {
        setCadastros(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getAllCadastro()
  }, [])

  const deleteCadastro = (cadastroId) => {
    CadastroService.deleteCadastro(cadastroId)
      .then(response => {
        getAllCadastro()
      })
      .catch(error => {
        console.log(error)
        const { data } = error.response
        if (data.status === 500) {
          alert('Erro na API')
        }
      })
  }

  return (
    <>
      <header className="header">
        <h1 className="container">Cadastro Passageiro</h1>
      </header>
      <div className="container p-5">
        <Link to="/Cadastros-Create" className="btn btn-primary mb-2">
          Criar Passageiro
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Destino</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {cadastros.map(cadastro => (
                <tr key={cadastro.id_cadastro}>
                  <td>{cadastro.id_cadastro}</td>
                  <td>{cadastro.nome}</td>
                  <td>{cadastro.sobrenome}</td>
                  <td>{cadastro.destino}</td>
                  <td>{cadastro.email}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Cadastro-Update/${cadastro.id_cadastro}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteCadastro(cadastro.id_cadastro)}
                      style={{ marginLeft: '10px' }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
