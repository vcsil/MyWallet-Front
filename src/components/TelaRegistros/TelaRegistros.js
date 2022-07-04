import React from "react";
import styled from "styled-components";

function TelaRegistros() {
  return (
    <Main>
      <ContainerRegistros>Oi</ContainerRegistros>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

const ContainerRegistros = styled.div`
  height: 446px;
  width: 326px;
  background-color: white;
  border-radius: 5px;
`;

export default TelaRegistros;
