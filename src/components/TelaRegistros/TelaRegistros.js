/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import styled from "styled-components";
import axios from "axios";

import { AuthContext } from "../../providers/Auth";
import ListarMovimentacao from "./ListarMovimentacao";
import Aviso from "../Aviso";

function TelaRegistros() {
  const navigate = useNavigate();
  const { user, setUser } = React.useContext(AuthContext);

  const [carregando, setCarregando] = useState(false);
  const [movimentacao, setMovimentacao] = useState([]);
  const [mostraAviso, setMostraAviso] = useState([]);

  function atualizaEntrada() {
    setUser({
      ...user,
      entrou: true,
    });
  }

  function deuErro() {
    setMostraAviso([]);
    setUser({ ...user, name: "", email: "", token: "", entrou: false });
    localStorage.removeItem("usuario");
    navigate("/");
  }

  function BoxAviso(mensagem) {
    setMostraAviso([
      ...mostraAviso,
      <Aviso key={0} mensagem={mensagem} ok={() => deuErro()} />,
    ]);
  }

  function getMovimentacao({ token }) {
    setCarregando(true);
    const URL = "https://mywallet-backend-vai.herokuapp.com/movimentacao";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.get(URL, config);
    promise.then((response) => {
      setCarregando(false);
      setMovimentacao(response.data);
    });
    promise.catch((err) => {
      setCarregando(false);
      const mensagem =
        typeof err.response.data === "undefined"
          ? "Servidor desconectado"
          : err.response.data;
      BoxAviso(mensagem);
    });
  }

  useEffect(() => {
    atualizaEntrada();
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
      const objetoUsuario = JSON.parse(usuario);
      getMovimentacao(objetoUsuario);
      return;
    }
    getMovimentacao(user);
  }, []);

  return (
    <Main>
      <ContainerRegistros>
        {carregando ? (
          <BoxBars>
            <Bars height="40" width="40" color="magenta" ariaLabel="loading" />
          </BoxBars>
        ) : (
          <ListarMovimentacao key={0} obj={movimentacao} />
        )}
      </ContainerRegistros>
      {mostraAviso.map((i) => i)}
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

const ContainerRegistros = styled.div`
  height: 446px;
  width: 100vh;
  padding: 24px 12px 0;
  background-color: white;
  border-radius: 5px;
  position: relative;
`;

const BoxBars = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TelaRegistros;
