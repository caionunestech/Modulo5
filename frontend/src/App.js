import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Cadastros from "./views/cadastros";
import CadastrosCreate from "./views/cadastros/Create";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cadastro" element={<Cadastros />} />
          <Route path="/Cadastros-Create" element={<CadastrosCreate />} />
          <Route path="/Cadastro-Update/:id" element={<CadastrosCreate />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
