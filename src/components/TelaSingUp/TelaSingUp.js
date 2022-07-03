import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Inputs from "./Inputs";

function TelaSingUp() {
  return (
    <SingUp>
      <Logotipo>
        <h1>MyWallet</h1>
      </Logotipo>
      <Inputs />
      <Link to="/" style={{ textDecoration: "none" }}>
        <LogSigIn>Já tem uma conta? Entre agora!</LogSigIn>
      </Link>
    </SingUp>
  );
}

const SingUp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--cor-fundo-tela);
  z-index: 3;
  padding: 95px 24px 0px;
`;

const Logotipo = styled.div`
  display: grid;
  justify-items: center;
  margin-bottom: 28px;

  h1 {
    font-family: "Saira Stencil One";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: var(--cor-branco);
  }
`;

const LogSigIn = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: var(--cor-branco);
`;

export default TelaSingUp;
