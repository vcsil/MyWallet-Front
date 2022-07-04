/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import styled from "styled-components";
import axios from "axios";

import { AuthContext } from "../../providers/Auth";
import ListarMovimentacao from "./ListarMovimentacao";
import Aviso from "../Aviso";

function TelaRegistros() {
  const { user, setUser } = React.useContext(AuthContext);

  const [saldo, setSaldo] = useState(0);
  const [carregando, setCarregando] = useState(false);
  const [movimentacao, setMovimentacao] = useState([]);
  const [mostraAviso, setMostraAviso] = useState([]);

  function atualizaEntrada() {
    setUser({
      ...user,
      entrou: true,
    });
  }

  function BoxAviso(mensagem) {
    setMostraAviso([
      ...mostraAviso,
      <Aviso key={0} mensagem={mensagem} ok={() => setMostraAviso([])} />,
    ]);
  }

  useEffect(() => {
    atualizaEntrada();
    setCarregando(true);

    const URL = "https://mywallet-backend-vai.herokuapp.com/movimentacao";
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
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
  }, [user.entrou]);

  return (
    <Main>
      <ContainerRegistros>
        {carregando ? (
          <Bars height="40" width="40" color="magenta" ariaLabel="loading" />
        ) : (
          <ListarMovimentacao
            key={0}
            obj={movimentacao}
            saldo={saldo}
            setSaldo={setSaldo}
          />
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
`;

export default TelaRegistros;
