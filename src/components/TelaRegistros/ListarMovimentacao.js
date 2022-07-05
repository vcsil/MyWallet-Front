/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import styled from "styled-components";

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
  obj.movimentacao?.reverse();
  return (
    <>
      {temMovimentacao ? (
        <>
          {obj.movimentacao.map((i, index) => CadaUm(i, index))}
          <BoxSaldo>
            <p>Saldo</p>
            <Valor
              cor={
                Number(obj.saldo) >= 0
                  ? "var(--cor-verde)"
                  : "var(--cor-vermelho)"
              }
            >
              {obj.saldo}
            </Valor>
          </BoxSaldo>
        </>
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
  line-height: 20px;
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

const BoxSaldo = styled.span`
  position: absolute;
  display: flex;
  justify-content: space-between;
  background-color: white;
  bottom: 10px;
  left: 15px;
  right: 12px;
  /* z-index: 2; */

  p {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    text-align: left;
  }
`;

export default ListarMovimentacao;
