import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Bars } from "react-loader-spinner";

function Inputs() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [carregando, setCarregando] = useState(false);

  function confirmaSenha() {
    if (confirmPassword === password) {
      return "green";
    }
    return "red";
  }

  function SubmitData(event) {
    if (!carregando) {
      event.preventDefault();
      setCarregando(true);

      const URL = "";
      const promise = axios.post(URL, {
        email,
        name,
        confirmPassword,
        password,
      });
      promise.then((response) => {
        console.log(response.status);
        setCarregando(false);
        navigate("/");
      });
      promise.catch((err) => {
        navigate("/cadastro");
        setCarregando(false);
        alert(err.response.statusText);
      });
    }
  }

  return (
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
