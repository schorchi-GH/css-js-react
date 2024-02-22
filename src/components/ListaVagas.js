import React from 'react';
import styled from 'styled-components';
import Vaga from './Vaga';
import { ListaVagasPropTypes } from './propTypes';

const breakpoints = {
  tablet: '768px',
  phone: '576px',
};

const ListaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 15px;
  }

  @media (max-width: ${breakpoints.phone}) {
    gap: 10px;
  }
`;

const ListaVagas = ({ vagas }) => {
  return (
    <ListaContainer>
      {vagas.map((vaga) => (
        <Vaga key={vaga.id} titulo={vaga.titulo} descricao={vaga.descricao} />
      ))}
    </ListaContainer>
  );
};

ListaVagas.propTypes = ListaVagasPropTypes;

export default ListaVagas;
