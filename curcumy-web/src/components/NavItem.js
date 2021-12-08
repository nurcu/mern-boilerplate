import React from 'react';
import { Flex, Link, Menu, MenuButton, Icon, Text } from '@chakra-ui/react';


export default function NavItem({navSize, title, icon, active}) {
  return (
    <Flex
      mt={30}
      w="100%"
      flexDir="column"
      alignItems={navSize === "small" ? "center" : "flex-start"}
      >
          <Menu placement="right">
            <Link
                backgroundColor={active && "#e9a447"}
                p={3}
                borderRadius={8}
                _hover={{ textDecor: 'none', backgroundColor: '#e9a447'}}
                w={navSize === "large" && "100%"}
            >
                <MenuButton w="100%">
                    <Flex>
                        <Icon as={icon} fontsize="xl" color={active ? "#d9881a" : "gray.500"}/>
                        <Text ml={5} display={navSize === "small" ? "none" : "flex"} >{title}</Text>
                    </Flex>
                </MenuButton>
            </Link>
          </Menu>
    </Flex>);
  }