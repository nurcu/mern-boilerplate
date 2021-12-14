import React from "react";
import PositionDataService from "../services/position.service";
import {
  Flex,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Text,
  Box,
  Button,
  useColorModeValue
} from "@chakra-ui/react";
import PositionRow from "../components/PositionRow";
import { Link } from "react-router-dom";



export default function Positions() {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      PositionDataService.getAll()
        .then(res => {
          setRows(res.data.data);
        })
        .catch(err => console.log(err));
    }

    fetchData();
  }, []);

  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Box overflowX={{ sm: "scroll", xl: "hidden" }}>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" color="gray.400">
              <Th color="gray.400">Portfolio</Th>
              <Th color="gray.400">Protocol</Th>
              <Th color="gray.400">Asset</Th>
              <Th color="gray.400">Asset Type</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((row) => {
              return (
                <PositionRow row={row} />
              );
            })}
          </Tbody>
        </Table>
      </Box>

      <Link to="/edit-position">
                    <Button p="0px" bg="transparent" variant="no-hover">
                        <Text
                            fontSize="md"
                            color="gray.400"
                            fontWeight="bold"
                            cursor="pointer"
                        >
                            New
                        </Text>
                    </Button>
                </Link>
    </Flex>
  );
}