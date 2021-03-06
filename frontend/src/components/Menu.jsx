import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Viagens Go
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/Cadastro" className="nav-link text-dark ">
                Cadastro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
