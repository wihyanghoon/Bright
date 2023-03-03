import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const basicTheme = {
  textColor : 'white',
  bgColor : "transparent"
}
root.render(
  <React.StrictMode>
    <ThemeProvider theme={basicTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
