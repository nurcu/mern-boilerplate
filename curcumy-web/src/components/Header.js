import React from 'react';
import { Text, Flex, useColorModeValue} from '@chakra-ui/react';
import {RiWallet2Line} from 'react-icons/ri';


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
      <RiWallet2Line/>
      <Text
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Wallet.....
      </Text>

    </Flex>
  );
};