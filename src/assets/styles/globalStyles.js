import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    --cor-fundo-tela: #8C11BE;
    --cor-branco: #FFFFFF;
    --cor-verde: #03AC00; 
    --cor-vermelho: #C70000; 
    --cor-preta: #000000;
    --cor-cinza: #C6C6C6;
    --cor-cinza-escuro: #868686;

    --cor-input-placeholder: #000000;
    --cor-input-background: #FFFFFF;
    --cor-button-background: #A328D6;
    --cor-button-border: #A328D6;

    --display-none: none;
    --display-flex: flex;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Raleway';
    font-style: normal;
    background-color: var(--cor-fundo-tela);
  }

  body::-webkit-scrollbar {
    display: none;
  }

  .boxInputs {
    width: 100%;
  }

  .boxInputs > input {
    width: 100%;
    height: 45px;
    padding: 0 15px;
    margin-bottom: 14px;
    background: var(--cor-branco);
    border: 0;
    border-radius: 5px;
  }

  input {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: var(--cor-preta);
  }

  input::placeholder {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #666666;
    opacity: 1;
  }

  button {
    background: var(--cor-button-background);
    border: var(--cor-button-border);
    border-radius: 5px;
  }

  button > p {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: var(--cor-branco);
  }

  button:hover {
    filter: brightness(0.9);
  }

  main{
    width: 100vw;
    height: 100vh;
    padding: 92px 18px 0;
    margin-bottom: 172px;
  }

  .titulo {
    font-weight: 400;
    font-size: 22.976px;
    line-height: 30px;
    color: var(--cor-azul-escuro);
  }

  .paragrafo {
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: var(--cor-preta);
  }
`;

export default GlobalStyle;
