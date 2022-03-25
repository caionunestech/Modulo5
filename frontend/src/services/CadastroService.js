import axios from 'axios'

const CADASTRO_API_URL = 'https://viagensgo.herokuapp.com/cadastro'

class CadastroService {
  getAllCadastro() {
    return axios.get('https://viagensgo.herokuapp.com/cadastro')
  }

  createCadastro(cadastro) {
    return axios.post('https://viagensgo.herokuapp.com/cadastro', cadastro)
  }

  getCadastroById(cadastroId) {
    return axios.get(CADASTRO_API_URL + '/' + cadastroId)
  }

  updateCadastro(cadastroId, cadastro) {
    return axios.put(CADASTRO_API_URL + '/' + cadastroId, cadastro)
  }

  deleteCadastro(cadastroId) {
    return axios.delete(CADASTRO_API_URL + '/' + cadastroId)
  }
}

export default new CadastroService()
