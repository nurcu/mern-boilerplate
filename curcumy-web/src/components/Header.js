import React from 'react';
import {Flex, useColorModeValue } from '@chakra-ui/react';
import ConnectButton from './ConnectButton';

export default function Header({ ...rest }) {

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <ConnectButton/>
    </Flex>
  );
};