import React from "react";
import styled from "styled-components";

function TelaRegistros() {
  return (
    <Main>
      <ContainerRegistros>
        <p>
          Não há registros de <br />
          entrada ou saída
        </p>
      </ContainerRegistros>
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
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: var(--cor-cinza-escuro);
  }
`;

export default TelaRegistros;
