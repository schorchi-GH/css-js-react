// Importando o React e o styled-components
import React from 'react';
import styled from 'styled-components';

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

export default BotaoAlternadorTema;
