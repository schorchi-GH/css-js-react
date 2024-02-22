import React from 'react';
import styled from 'styled-components';
import { BotaoAlternadorTemaPropTypes } from './propTypes';

const breakpoints = {
  tablet: '768px',
  phone: '576px',
};

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

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px 12px;
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.phone}) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;

const BotaoAlternadorTema = ({ alternarTema }) => {
  return <Botao onClick={alternarTema}>Alternar Tema</Botao>;
};

BotaoAlternadorTema.propTypes = BotaoAlternadorTemaPropTypes;

export default BotaoAlternadorTema;
