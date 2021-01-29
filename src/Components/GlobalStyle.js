import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 22px;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.30s linear;
  }

  .form {
    box-shadow: ${({ theme }) => theme.form.shadow};
    transition: all .3s linear;
  }

  .underline {
    background-color: ${({ theme }) => theme.input.borderColor};
  }

  
  input {
    background-color: ${({ theme }) => theme.input.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.30s linear;
    position: relative;
    ::placeholder{
      color: ${({ theme }) => theme.text};
      font-weight: 300;
    }
  }
  `;