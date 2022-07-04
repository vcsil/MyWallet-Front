import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

function Footer({ entrou }) {
  return (
    <Menu entrou={entrou}>
      <Link to="/entrada" style={{ textDecoration: "none" }}>
        <Botao>
          <ion-icon
            name="add-circle-outline"
            style={{
              width: "24px",
              height: "24px",
              color: "white",
              cursor: "pointer",
            }}
          />
          <p>
            Nova
            <br />
            entrada
          </p>
        </Botao>
      </Link>
      <Link to="/saida" style={{ textDecoration: "none" }}>
        <Botao>
          <ion-icon
            name="remove-circle-outline"
            style={{
              width: "24px",
              height: "24px",
              color: "white",
              cursor: "pointer",
            }}
          />
          <p>
            Nova
            <br />
            saída
          </p>
        </Botao>
      </Link>
    </Menu>
  );
}

const Menu = styled.footer`
  background-color: var(--cor-fundo-tela);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 142px;
  padding: 0 24px;

  display: ${(props) =>
    props.entrou ? "var(--display-flex)" : "var(--display-none)"};

  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const Botao = styled.button`
  width: 155px;
  height: 114px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: var(--cor-branco);
    cursor: pointer;
    text-align: left;
  }
`;

export default Footer;
