/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
// import axios from "axios";
import styled from "styled-components";

// import { AuthContext } from "../../providers/Auth.js";
// import Aviso from "../Aviso";

function CadaUm(obj, index) {
  return (
    <Linha key={index}>
      <Data>{obj.date}</Data>
      <Descricao>{obj.descricao}</Descricao>
      <Valor
        cor={
          obj.movimentacao === "entrada"
            ? "var(--cor-verde)"
            : "var(--cor-vermelho)"
        }
      >
        {obj.valor}
      </Valor>
    </Linha>
  );
}

function ListarMovimentacao({ obj }) {
  const temMovimentacao = obj.length !== 0;
  console.log(temMovimentacao, obj.length, obj);

  return (
    <>
      {temMovimentacao ? (
        obj.map((i, index) => CadaUm(i, index))
      ) : (
        <Texto>
          Não há registros de <br />
          entrada ou saída
        </Texto>
      )}
    </>
  );
}

const Linha = styled.p`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Data = styled.span`
  width: 48px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--cor-cinza);
`;
const Descricao = styled.span`
  width: 70%;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  color: var(--cor-preta);
  max-width: 220px;
  overflow: hidden;
  overflow-wrap: inherit;
  max-height: 40px;
  text-overflow: ellipsis;
`;
const Valor = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: ${(props) => props.cor};
`;
const Texto = styled.p`
  width: 100%;
  height: 100%;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--cor-cinza-escuro);
`;

export default ListarMovimentacao;
