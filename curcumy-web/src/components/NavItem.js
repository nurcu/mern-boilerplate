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
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'brand.900',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        <Text>{title}</Text>
      </Flex>
    </Link>);
}