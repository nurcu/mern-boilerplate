import React from 'react';
import {Flex, Image, Box, Divider, HStack, Button, CloseButton, useColorModeValue } from '@chakra-ui/react';
import {RiTwitterLine, RiGithubLine, RiTelegramLine} from 'react-icons/ri';
import NavItem from './NavItem';


export default function Sidebar({logo, routes, onClose, ...rest }) {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Image borderRadius='full' boxSize='30px' src={logo} alt=''/>
      <CloseButton
      display={{base: 'none', md: 'block'}}
      onClick={onClose} />
      </Flex>
      {routes.map((link) => (
        <NavItem key={link.name} icon={link.icon} title={link.name} path={link.path}/>
      ))}

      <Divider display="flex" />
        <HStack display="flex">
          <Button size="md" leftIcon={<RiTwitterLine />}/>
          <Button size="md" leftIcon={<RiGithubLine />}/>
          <Button size="md" leftIcon={<RiTelegramLine />}/>
        </HStack>
    </Box>
  );
};
