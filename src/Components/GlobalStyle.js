import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.30s linear;
  }

  h2 {
    color: ${({ theme }) => theme.text};
    transition: all 0.30s linear;
  }

  p{
    color: ${({ theme }) => theme.text};
    transition: all 0.30s linear;
  }

  input {
    background-color: ${({ theme }) => theme.tertiary};
    color: ${({ theme }) => theme.text};
    transition: all 0.30s linear;
    ::placeholder{
      color: ${({ theme }) => theme.text};
      transition: color 0.30s linear;
    }
  }

  a {
    color: ${({ theme }) => theme.link};
    transition: all 0.30s linear;
    :visited {
      color: ${({ theme }) => theme.link};
    }
  }

  .submit-button {
    color: ${({ theme }) => theme.text};
    border: ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.primary};
    transition: all .3s linear;
    &:hover {
      background-color: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.primary}
    }
  }

  .navButton {
    background-color: ${({ theme }) => theme.primary};
    transition: all 0.30s linear;
      &:hover{
      box-shadow: ${({ theme }) => theme.navButton_shadow};
    }
  }

  .underline {
    background-color: ${({ theme }) => theme.underline};
    transition: all .3s linear
  }

  .form {
    box-shadow: ${({ theme }) => theme.main_shadow};
    transition: all .3s linear;
  }

  .helpbox {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    transition: all 0.30s linear;
    border: ${({ theme }) => theme.border};
  }

  .theme-toggler {
    background-color: ${({ theme }) => theme.primary};
    box-shadow: ${({ theme }) => theme.main_shadow};
    transition: all 0.30s linear;
  }

  .error-text {
    color: ${({ theme }) => theme.error_text};
  }
  
  `;