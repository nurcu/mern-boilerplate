import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, useColorModeValue } from '@chakra-ui/react';
// Custom components
import logo from './logo.svg';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

import routes from './routes';


export default function App() {
  return (
    <Router>
      <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>

        <Sidebar
          logo={logo}
          routes={routes} />
        <Header />
        <Box ml={{ base: 0, md: 60 }} p="4">
          <Switch>
            {
              routes.map((r, k) => {
                return (
                  <Route
                    exact
                    path={r.path}
                    component={r.component}
                    key={k}
                  />);
              })
            }
            {
              routes.filter(r => r.detailPath).map((r, k) => {
                return (
                    <Route
                      path={r.detailPath}
                      component={r.detailComponent}
                      key={"DTL" + k}
                    />);
              })
            }
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}
