import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Reset from "../assets/styles/reset";
import GlobalStyle from "../assets/styles/globalStyles";
import TelaSignIn from "./TelaSignIn/TelaSignIn";
import TelaSignUp from "./TelaSignUp/TelaSignUp";
import TelaRegistros from "./TelaRegistros/TelaRegistros";
import Header from "./layouts/Header";
import { AuthContext } from "../providers/Auth";

function App() {
  const { user } = React.useContext(AuthContext);

  const { entrou } = user;

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Reset />
      <Header entrou={entrou} />

      <Routes>
        <Route path="/" element={<TelaSignIn />} />
        <Route path="/cadastro" element={<TelaSignUp />} />
        <Route path="/registros" element={<TelaRegistros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
