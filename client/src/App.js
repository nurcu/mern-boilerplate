import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
// Custom components
import logo from './logo.svg';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import RouterSwitch from './components/RouterSwitch';

import routes from './routes';


export default function App() {
  return (
    <Router>
      <Box minH="100vh" bgGradient="linear-gradient(135deg, rgba(75,24,41,1) 0%, rgba(38,12,21,1) 25%)">
        <Header logo={logo} />
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Sidebar routes={routes} />
          <RouterSwitch routes={routes} />
        </Flex>
      </Box>
    </Router>
  );
}
