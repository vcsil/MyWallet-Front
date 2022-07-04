/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import styled from "styled-components";
import axios from "axios";

import { AuthContext } from "../../providers/Auth";
import Aviso from "../Aviso";

function Inputs() {
  const { user, setUser } = React.useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [mostraAviso, setMostraAviso] = useState([]);

  function entraLogo() {
    setCarregando(false);
    navigate("/registros");
  }

  function entrando(props) {
    setUser({
      ...user,
      name: props.name,
      email: props.email,
      token: props.token,
      entrou: true,
    });
    setCarregando(false);

    const dadosSerializados = JSON.stringify({
      name: props.name,
      email: props.email,
      token: props.token,
      entrou: true,
    });
    localStorage.setItem("usuario", dadosSerializados);

    navigate("/registros");
  }

  function BoxAviso(mensagem) {
    setMostraAviso([
      ...mostraAviso,
      <Aviso key={0} mensagem={mensagem} ok={() => setMostraAviso([])} />,
    ]);
  }

  function SubmitData(event) {
    event.preventDefault();
    setCarregando(true);

    const URL = "http://localhost:5000/sign-in";
    const promise = axios.post(URL, {
      email,
      password,
    });
    promise.then((response) => {
      entrando(response.data);
    });
    promise.catch((err) => {
      const mensagem =
        typeof err.response.data === "undefined"
          ? "Servidor desconectado"
          : err.response.data;
      BoxAviso(mensagem);
      setCarregando(false);
    });
  }

  useEffect(() => {
    if (localStorage.getItem("usuario")) {
      entraLogo();
    }
  }, []);

  return (
    <>
      <form className="boxInputs" onSubmit={SubmitData}>
        <input
          placeholder="E-mail"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={carregando}
          required
        />
        <input
          placeholder="Senha"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={carregando}
          required
        />
        <Botao type="submit" disabled={carregando}>
          {carregando ? (
            <Bars height="40" width="40" color="white" ariaLabel="loading" />
          ) : (
            <p>Entrar</p>
          )}
        </Botao>
      </form>
      {mostraAviso.map((i) => i)}
    </>
  );
}

const Botao = styled.button`
  width: 100%;
  height: 46px;
  margin-bottom: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Inputs;
