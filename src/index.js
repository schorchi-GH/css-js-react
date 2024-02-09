import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from './RootApp';
import reportWebVitals from './reportWebVitals';

reportWebVitals(console.log);

ReactDOM.render(
  <React.StrictMode>
    <RootApp /> {}
  </React.StrictMode>,
  document.getElementById('root')
);
