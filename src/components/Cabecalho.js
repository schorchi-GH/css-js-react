import React from 'react';
import styled from 'styled-components';

// Estilizando o cabeçalho
const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.headingColor};
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

// Componente do cabeçalho
const Cabecalho = () => {
  return (
    // Renderizando o cabeçalho com base no tema
    <HeaderContainer>
      <Title>Aplicativo Schorchi</Title>
    </HeaderContainer>
  );
};

export default Cabecalho;
