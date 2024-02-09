import React from 'react';
import styled from 'styled-components';

// Estilizando o herói
const HeroContainer = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  padding: 50px 0;
  text-align: center;
`;

const HeroTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 0;
`;

// Componente do herói
const Hero = () => {
  return (
    // Renderizando o herói com base no tema
    <HeroContainer>
      <HeroTitle>Bem-vindo ao Schorchi!</HeroTitle>
      <HeroSubtitle>Encontre sua próxima vaga de emprego.</HeroSubtitle>
    </HeroContainer>
  );
};

export default Hero;
