import { useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Aviso from "../Aviso";

function Inputs() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mostraAviso, setMostraAviso] = useState([]);

  const [carregando, setCarregando] = useState(false);

  function confirmaSenha() {
    if (confirmPassword === password) {
      return "green";
    }
    return "red";
  }

  function BoxAviso(mensagem) {
    setMostraAviso([
      ...mostraAviso,
      <Aviso key={0} mensagem={mensagem} ok={() => setMostraAviso([])} />,
    ]);
  }

  function SubmitData(event) {
    if (!carregando) {
      event.preventDefault();
      setCarregando(true);

      const URL = "http://localhost:5000/sign-up";
      const promise = axios.post(URL, {
        name,
        email,
        password,
        confirmPassword,
      });
      promise.then((response) => {
        setCarregando(false);
        BoxAviso(response.data);
        navigate("/");
      });
      promise.catch((err) => {
        navigate("/cadastro");
        setCarregando(false);
        const mensagem =
          typeof err.response.data === "undefined"
            ? "Servidor desconectado"
            : err.response.data;
        BoxAviso(mensagem);
      });
    }
  }

  return (
    <>
      <form className="boxInputs" onSubmit={SubmitData}>
        <input
          placeholder="Nome"
          type="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={carregando}
          required
        />
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
        <ConfirmaSenha
          // eslint-disable-next-line react/jsx-no-bind
          cor={confirmaSenha}
          placeholder="Confirme a senha"
          type="password"
          id="confirm_password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={carregando}
          required
        />
        <Botao type="submit" disabled={carregando}>
          {carregando ? (
            <Bars height="40" width="40" color="white" ariaLabel="loading" />
          ) : (
            <p>Cadastrar</p>
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
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConfirmaSenha = styled.input`
  color: ${(props) => props.cor};
`;

export default Inputs;
