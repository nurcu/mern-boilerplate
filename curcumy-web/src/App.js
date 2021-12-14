import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Drawer, DrawerContent, Box, useDisclosure, useColorModeValue } from '@chakra-ui/react';
// Custom components
import logo from './logo.svg';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

import routes from './routes';


export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HashRouter>
      <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        <Sidebar
          logo={logo}
          routes={routes}
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <Sidebar
              logo={logo}
              routes={routes}
              onClose={() => onClose} />
          </DrawerContent>
        </Drawer>
        <Header onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
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
            {
              routes.filter(r => r.detailPath).map((r, k) => {
                return (
                  <>
                    <Route
                      path={r.detailPath}
                      component={r.detailComponent}
                      key={"DTL" + k}
                    />
                  </>);
              })
            }
          </Switch>
        </Box>
      </Box>
    </HashRouter>
  );
}
