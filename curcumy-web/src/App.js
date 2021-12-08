import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ChakraProvider, Box, Portal } from '@chakra-ui/react';
// Custom components
import './App.css';
import logo from './logo.svg';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Configurator from './components/Configurator';
import FixedPlugin from './components/FixedPlugin';
import Footer from './components/Footer';

import routes from './routes';

function App() {

  const mainPanel = React.createRef();
  return (
    <ChakraProvider className="App">
      <HashRouter>
        <Sidebar routes={routes} logo={logo} />
        <Box ref={mainPanel} w={{ base: "100%", xl: "calc(100% - 275px)" }}>
          <Portal>
            <Header />
          </Portal>
          <Switch>
            {
              routes.map((r, k) => {
                return (
                  <Route
                    path={r.path}
                    component={r.component}
                    key={k}
                  />);
              })
            }
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <Footer />
          <Portal>
            <FixedPlugin />
          </Portal>
          <Configurator />
        </Box>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
