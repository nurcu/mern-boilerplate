import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import reportWebVitals from './reportWebVitals';
import { DAppProvider } from "@usedapp/core";
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <DAppProvider config={{}}>
        <ColorModeScript initialColorMode="dark"/>
        <App />
      </DAppProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
