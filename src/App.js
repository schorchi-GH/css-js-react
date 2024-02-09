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

// Componente principal da aplicação
const App = () => {
  // Definindo o estado inicial baseado nas preferências do sistema do usuário
  const [modoTema, setModoTema] = useState(() => {
    const temaSalvo = localStorage.getItem('tema') // Tentativa de recuperar o tema do localStorage
    if (temaSalvo) {
      return temaSalvo;
    } else {
      // Usa as preferências do sistema se não houver tema salvo
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro';
    }
  });

  // Função para alternar entre os modos de tema
  const alternarTema = () => {
    setModoTema(modoTemaAtual => modoTemaAtual === 'claro' ? 'escuro' : 'claro');
  };

  // Efeito para armazenar a preferência de tema do usuário no localStorage
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
        <Vaga />
        <ListaVagas />
      </div>
    </ThemeProvider>
  );
};

export default App;
