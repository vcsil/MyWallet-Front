import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import { AuthContext } from "../../providers/Auth";

function Inputs() {
  const { user, setUser } = React.useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [carregando, setCarregando] = useState(false);

  function entraLogo() {
    setCarregando(false);
    navigate("/registros");
  }

  function entrando({ id, name, image, token }) {
    setUser({ ...user, id, name, image, token, entrou: true });
    setCarregando(false);

    const dadosSerializados = JSON.stringify({
      id,
      name,
      image,
      token,
      entrou: true,
    });
    localStorage.setItem("usuario", dadosSerializados);

    navigate("/registros");
  }

  function SubmitData(event) {
    event.preventDefault();
    setCarregando(true);

    const URL = "";
    const promise = axios.post(URL, {
      email,
      password,
    });
    promise.then((response) => {
      entrando(response.data);
    });
    promise.catch((err) => {
      alert(err.response.statusText);
    });
  }

  useEffect(() => {
    if (localStorage.getItem("usuario")) {
      entraLogo();
    }
  }, []);

  return (
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
