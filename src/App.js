import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './styles/theme';
import BotaoAlternadorTema from './components/BotaoAlternadorTema';
import Cabecalho from './components/Cabecalho';
import Hero from './components/Hero';
import Formulario from './components/Formulario';
import Vaga from './components/Vaga';
import ListaVagas from './components/ListaVagas';

const App = () => {
  const [modoTema, setModoTema] = useState(() => {
    const temaSalvo = localStorage.getItem('tema');
    return temaSalvo || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro');
  });

  const alternarTema = () => {
    setModoTema(modoTemaAtual => modoTemaAtual === 'claro' ? 'escuro' : 'claro');
  };

  useEffect(() => {
    localStorage.setItem('tema', modoTema);
  }, [modoTema]);

  return (
    <ThemeProvider theme={modoTema === 'claro' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BotaoAlternadorTema modoTema={modoTema} alternarTema={alternarTema} />
      <div>
        <Cabecalho />
        <Hero />
        <Formulario />
        <Vaga titulo="Título da Vaga" descricao="Descrição da Vaga" />
        <ListaVagas vagas={[{ id: 1, titulo: 'Desenvolvedor Frontend', descricao: 'Descrição da vaga para Desenvolvedor Frontend' }]} />
      </div>
    </ThemeProvider>
  );
};

export default App;
