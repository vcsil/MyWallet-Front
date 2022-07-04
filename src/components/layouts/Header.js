/* eslint-disable react/prop-types */
import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../providers/Auth";

function Header({ entrou }) {
  const navigate = useNavigate();

  const { user, setUser } = React.useContext(AuthContext);

  function Sair() {
    setUser({ ...user, name: "", email: "", token: "", entrou: false });
    localStorage.removeItem("usuario");
    navigate("/");
  }

  return (
    <Titulo entrou={entrou}>
      <h1>Olá, {user.name}</h1>
      <ion-icon
        name="exit-outline"
        style={{
          width: "24px",
          height: "24px",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => Sair()}
      />
    </Titulo>
  );
}

const Titulo = styled.header`
  background-color: var(--cor-azul-escuro);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 78px;
  padding: 0 24px;

  display: ${(props) =>
    props.entrou ? "var(--display-flex)" : "var(--display-none)"};

  justify-content: space-between;
  align-items: center;
  z-index: 1;

  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: var(--cor-branco);
    cursor: pointer;
  }
`;

export default Header;
