import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Reset from "../assets/styles/reset";
import GlobalStyle from "../assets/styles/globalStyles";
import TelaSignIn from "./TelaSignIn/TelaSignIn";
import TelaSignUp from "./TelaSignUp/TelaSignUp";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Reset />

      <Routes>
        <Route path="/" element={<TelaSignIn />} />
        <Route path="/cadastro" element={<TelaSignUp />} />
        <Route path="/registros" element={<h1>Oii</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
