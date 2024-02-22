// Importando o React e o styled-components
import React from 'react';
import styled from 'styled-components';
import { BotaoAlternadorTemaPropTypes } from './propTypes'; // Certifique-se de que o caminho para o arquivo está correto

// Estilizando o botão alternador de tema
const Botao = styled.button`
  background-color: ${({ theme }) => theme.buttonBgColor};
  color: ${({ theme }) => theme.buttonTextColor};
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBgColor};
  }
`;

// Componente do botão alternador de tema
const BotaoAlternadorTema = ({ alternarTema }) => {
  return (
    <Botao onClick={alternarTema}>
      Alternar Tema
    </Botao>
  );
};

// Aplicando PropTypes usando a importação do arquivo propTypes.js
BotaoAlternadorTema.propTypes = BotaoAlternadorTemaPropTypes;

// Exportando o componente BotaoAlternadorTema
export default BotaoAlternadorTema;

