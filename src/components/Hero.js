import React from 'react';
import styled from 'styled-components';

const breakpoints = {
  tablet: '768px',
  phone: '576px',
};

const HeroContainer = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  padding: 50px 0;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 0;
  }

  @media (max-width: ${breakpoints.phone}) {
    padding: 30px 20px;
  }
`;

const HeroTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
  }

  @media (max-width: ${breakpoints.phone}) {
    font-size: 24px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 0;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.phone}) {
    font-size: 14px;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Bem-vindo ao Schorchi!</HeroTitle>
      <HeroSubtitle>Encontre sua próxima vaga de emprego.</HeroSubtitle>
    </HeroContainer>
  );
};

export default Hero;
