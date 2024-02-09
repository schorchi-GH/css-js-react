import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to right, #ff6b6b, #556270);
    color: ${({ theme }) => theme.textColor};
    line-height: 1.6;
    padding: 0 20px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1, h2, h3 {
    font-weight: bold;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.headingColor};
  }

  button {
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.buttonBgColor};
    color: ${({ theme }) => theme.buttonTextColor};
    border: none;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: ${({ theme }) => theme.buttonHoverBgColor};
  }
`;

export default GlobalStyle;
