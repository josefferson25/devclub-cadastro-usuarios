import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
  }

  body{
    background: linear-gradient(135deg,#0f172a,#1e293b);
    min-height:100vh;
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor:pointer;
  }

  input{
    font-family: inherit;
  }
`;

export default GlobalStyle;
