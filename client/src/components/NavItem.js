import React from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";


export default function NavItem({ title, icon, path, ...rest }) {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="xl"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#1e0a11',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            color="white"
            mr="4"
            fontSize="16"
            boxSize='32px'
            as={icon}
          />
        )}
        <Text color="#f1c68c" fontSize={18}  display={{ base: "none", md: "flex" }}>{title}</Text>
      </Flex>
    </Link>);
}