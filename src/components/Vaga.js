import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { VagaPropTypes } from './propTypes'; // Asegure-se de que o caminho está correto

const breakpoints = {
  tablet: '768px',
  phone: '576px',
};

const VagaContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBgColor};
  color: ${({ theme }) => theme.textColor};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.tablet}) {
    padding: 15px;
    margin-bottom: 15px;
  }

  @media (max-width: ${breakpoints.phone}) {
    padding: 10px;
    margin-bottom: 10px;
  }
`;

const VagaTitulo = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (max-width: ${breakpoints.phone}) {
    font-size: 16px;
  }
`;

const VagaDescricao = styled.p`
  font-size: 16px;

  @media (max-width: ${breakpoints.phone}) {
    font-size: 14px;
  }
`;

const Vaga = ({ titulo, descricao }) => {
  return (
    <VagaContainer>
      <VagaTitulo>{titulo}</VagaTitulo>
      <VagaDescricao>{descricao}</VagaDescricao>
    </VagaContainer>
  );
};

Vaga.propTypes = VagaPropTypes;

export default Vaga;
