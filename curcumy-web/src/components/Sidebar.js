import React from 'react';
import { Flex, Box, Link } from '@chakra-ui/react';
import { RiTwitterFill, RiGithubFill, RiTelegramFill } from 'react-icons/ri';
import NavItem from './NavItem';


export default function Sidebar({ routes, ...rest }) {
  return (
    <Flex
      h="25"
      w="80"
      alignItems="left"
      ml="5"
      justifyContent="space-between"
      direction={{ base: 'row', md: 'column' }} >
      {routes.map((link) => (
        <NavItem key={link.name} icon={link.icon} title={link.name} path={link.path} />
      ))}

      <Box display={{ base: 'none', md: 'flex' }}>
        <Flex mt="100" direction="row" mx="10" justifyContent="space-between" w="50%">
          <Link href='https://twitter.com/curcumy' isExternal><RiTwitterFill color="#f1c68c" size="24px" />
          </Link>
          <Link href='https://bit.ly/3wJB3hl' isExternal><RiGithubFill color="#f1c68c" size="24px" />
          </Link>
          <Link href='https://t.me/curcumy' isExternal><RiTelegramFill color="#f1c68c" size="24px" />
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};
