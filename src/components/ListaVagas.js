// Importando o React e o styled-components
import React from 'react';
import styled from 'styled-components';
import Vaga from './Vaga';

// Estilizando a lista de vagas
const ListaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Componente da lista de vagas
const ListaVagas = ({ vagas }) => {
  return (
    <ListaContainer>
      {vagas.map((vaga) => (
        <Vaga key={vaga.id} titulo={vaga.titulo} descricao={vaga.descricao} />
      ))}
    </ListaContainer>
  );
};

export default ListaVagas;
