// Importando o React e o styled-components
import React from 'react';
import styled from 'styled-components';

// Estilizando o componente da vaga
const VagaContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBgColor};
  color: ${({ theme }) => theme.textColor};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const VagaTitulo = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const VagaDescricao = styled.p`
  font-size: 16px;
`;

// Componente da vaga
const Vaga = ({ titulo, descricao }) => {
  return (
    <VagaContainer>
      <VagaTitulo>{titulo}</VagaTitulo>
      <VagaDescricao>{descricao}</VagaDescricao>
    </VagaContainer>
  );
};

export default Vaga;
