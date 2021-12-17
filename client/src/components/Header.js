import React from 'react';
import { Flex, Spacer, Image } from '@chakra-ui/react';
import ConnectButton from './ConnectButton';

export default function Header({ logo, ...rest }) {

  return (
    <Flex
      px="4"
      position="sticky"
      top="0"
      height="20"
      zIndex="1"
      alignItems="center"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}>

      <Image
        display={{ base: "none", md: "flex" }}
        boxSize='32px'
        src={logo}
        alt=''
        m='20px' />
      <Spacer />
      <ConnectButton />
    </Flex>
  );
};