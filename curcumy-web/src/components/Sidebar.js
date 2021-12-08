import React, {useState} from 'react';
import { Flex, Divider, HStack, Button, IconButton } from '@chakra-ui/react';
import {RiTwitterLine, RiGithubLine, RiTelegramLine} from 'react-icons/ri';
import {RiMenuLine,RiDashboardFill, RiProfileLine, RiArrowLeftRightLine, RiFolderChart2Line} from 'react-icons/ri';
import NavItem from './NavItem';


export default function Sidebar({logo, routes}) {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={navSize==="small" ? "75px" : "200px"}
      borderRadius={navSize==="small" ? "15px" : "30px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
      p="5%"
      flexDir="column"
      alignItems={navSize === "small" ? "center" : "flex-start"}
      as="nav"

      >
        <IconButton background="none" mt={5} _hover={{background: 'none'}} icon={RiMenuLine}
          onClick={() => {
            if (navSize === "small")
              changeNavSize("large");
            else
              changeNavSize("small");
          }}
        />
        {
          routes.map((r) =>
          {
            return <NavItem navSize={navSize} icon={r.icon} title={r.name}/>;
          })
        }
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <HStack display={navSize === "small" ? "none" : "flex"}>
          <Button size="sm" colorScheme='twitter' leftIcon={<RiTwitterLine />}/>
          <Button size="sm" colorScheme='github' leftIcon={<RiGithubLine />}/>
          <Button size="sm" colorScheme='telegram' leftIcon={<RiTelegramLine />}/>
        </HStack>
      </Flex>

    </Flex>
  )
  
};