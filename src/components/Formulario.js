import React from 'react';
import styled from 'styled-components';

const breakpoints = {
  tablet: '768px',
  phone: '576px',
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.formBgColor};
  padding: 20px;
  border-radius: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 15px;
  }

  @media (max-width: ${breakpoints.phone}) {
    padding: 10px;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.inputBorderColor};
  border-radius: 4px;
  color: ${({ theme }) => theme.inputTextColor};
  background-color: ${({ theme }) => theme.inputBgColor};

  &:focus {
    border-color: ${({ theme }) => theme.inputFocusBorderColor};
    outline: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px;
  }

  @media (max-width: ${breakpoints.phone}) {
    padding: 6px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.buttonBgColor};
  color: ${({ theme }) => theme.buttonTextColor};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBgColor};
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px 18px;
  }

  @media (max-width: ${breakpoints.phone}) {
    padding: 6px 16px;
  }
`;

const Formulario = () => {
  return (
    <Form>
      <Input type="text" placeholder="Nome" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Senha" />
      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default Formulario;
