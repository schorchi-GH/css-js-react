import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { lightTheme, darkTheme } from './styles/theme';

const RootApp = () => {
  const [modoTema, setModoTema] = useState('claro');

  const alternarTema = () => {
    setModoTema(modoTema === 'claro' ? 'escuro' : 'claro');
  };

  return (
    <ThemeProvider theme={modoTema === 'claro' ? lightTheme : darkTheme}>
      {/* Passa modoTema e alternarTema como props para App se necessário */}
      <App modoTema={modoTema} alternarTema={alternarTema} />
    </ThemeProvider>
  );
};

export default RootApp;

