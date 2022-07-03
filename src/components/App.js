import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Reset from "../assets/styles/reset";
import GlobalStyle from "../assets/styles/globalStyles";
import TelaLogin from "./TelaLogin/TelaLogin";
import TelaSingUp from "./TelaSingUp/TelaSingUp";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Reset />

      <Routes>
        <Route path="/" element={<TelaLogin />} />
        <Route path="/cadastro" element={<TelaSingUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
