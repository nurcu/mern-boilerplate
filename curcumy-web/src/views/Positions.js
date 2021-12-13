import React from "react";
import PositionDataService from "../services/position.service";
import {
  Flex,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Box,
  useColorModeValue
} from "@chakra-ui/react";
import PositionRow from "../components/PositionRow";



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
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th pl="0px" color="gray.400">Portfolio</Th>
                  <Th color="gray.400">Protocol</Th>
                  <Th color="gray.400">Asset</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {rows.map((row) => {
                  return (
                    <PositionRow row={row}/>
                  );
                })}
              </Tbody>
            </Table>
        </Box>
      </Flex>
      );
}