import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { FiLogIn } from "react-icons/fi";
import "./style.css";

import heroesImg from "../../assets/heroes.png";
import Logo from "../../assets/logo.svg";
import api from "../../services/api";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (error) {
      alert("Falha no login, tente novamente");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={Logo} alt="Be The Hero"></img>
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          ></input>

          <button type="submit" className="button">
            Entrar
          </button>
          <Link to="/register" className="back-link">
            <FiLogIn size="16" color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="heroes"></img>
    </div>
  );
}
