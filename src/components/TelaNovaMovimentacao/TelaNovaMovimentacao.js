import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import styled from "styled-components";
import axios from "axios";
import dayjs from "dayjs";

import { AuthContext } from "../../providers/Auth";
import Aviso from "../Aviso";

function TelaNovaMovimentacao({ movimentacao }) {
  const { user, setUser } = React.useContext(AuthContext);

  const navigate = useNavigate();

  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [mostraAviso, setMostraAviso] = useState([]);

  function atualizaEntrada() {
    setUser({
      ...user,
      entrou: false,
    });
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

    const URL = "https://mywallet-backend-vai.herokuapp.com/movimentacao";
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const body = {
      date: dayjs(Date.now()).format("DD/MM"),
      descricao,
      valor,
      movimentacao,
    };
    const promise = axios.post(URL, body, config);
    promise.then((response) => {
      BoxAviso(response.status);
      navigate("/registros");
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
    atualizaEntrada();
  }, [user.entrou]);

  return (
    <Container>
      <Link to="/registros" style={{ textDecoration: "none" }}>
        <h1>Nova {movimentacao}</h1>
      </Link>
      <form className="boxInputs" onSubmit={SubmitData}>
        <input
          placeholder="Valor"
          type="text"
          id="valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          disabled={carregando}
          required
        />
        <input
          placeholder="Descrição"
          type="text"
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          disabled={carregando}
          required
        />
        <Botao type="submit" disabled={carregando}>
          {carregando ? (
            <Bars height="40" width="40" color="white" ariaLabel="loading" />
          ) : (
            <p>Salvar {movimentacao}</p>
          )}
        </Botao>
      </form>
      {mostraAviso.map((i) => i)}
    </Container>
  );
}

const Container = styled.main`
  padding: 24px;

  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: var(--cor-branco);
    margin-bottom: 40px;
  }
`;

const Botao = styled.button`
  width: 100%;
  height: 46px;
  margin-bottom: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TelaNovaMovimentacao;
