import React from 'react';
import styled from 'styled-components';

const breakpoints = {
  tablet: '768px',
  phone: '576px',
};

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.headingColor};
  padding: 20px;
  @media (max-width: ${breakpoints.tablet}) {
    padding: 15px;
  }
  @media (max-width: ${breakpoints.phone}) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 22px;
  }
  @media (max-width: ${breakpoints.phone}) {
    font-size: 20px;
  }
`;

const Cabecalho = () => {
  return (
    <HeaderContainer>
      <Title>Aplicativo Schorchi</Title>
    </HeaderContainer>
  );
};

export default Cabecalho;
