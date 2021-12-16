import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import reportWebVitals from './reportWebVitals';
import { DAppProvider } from "@usedapp/core";
import theme from './theme';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <DAppProvider config={{}}>
      <App />
    </DAppProvider>
  </ChakraProvider>,
  document.getElementById('root')
);

reportWebVitals();
