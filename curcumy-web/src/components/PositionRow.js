import React from 'react';
import {
    Tr,
    Td,
    Flex,
    Text,
    Badge,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";


export default function PositionRow({ row }) {
    const textColor = useColorModeValue("gray.700", "white");
    const bgStatus = useColorModeValue("gray.400", "#1a202c");
    const colorStatus = useColorModeValue("white", "gray.400");
    return (
        <Tr>
            <Td>
                <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    minWidth="100%"
                >
                    {row.portfolio}
                </Text>
            </Td>
            <Td>
                <Text fontSize="md" color={textColor} fontWeight="bold">
                    {row.protocol}
                </Text>
            </Td>
            <Td>
                <Flex direction="column">
                    <Text
                        fontSize="md"
                        color={textColor}
                        fontWeight="bold"
                        minWidth="100%"
                    >
                        {row.assetName}
                    </Text>
                    <Text fontSize="sm" color="gray.400" fontWeight="normal">
                        {row.asset}
                    </Text>
                </Flex>
            </Td>
            <Td>
                <Badge
                    bg={bgStatus}
                    color={colorStatus}
                    fontSize="16px"
                    p="3px 10px"
                    borderRadius="8px"
                >
                    {row.assetType}
                </Badge>
            </Td>
            <Td>
                <Link to={"/edit-position/" + row._id}>
                    <Button p="0px" bg="transparent" variant="no-hover">
                        <Text
                            fontSize="md"
                            color="gray.400"
                            fontWeight="bold"
                            cursor="pointer"
                        >
                            Edit
                        </Text>
                    </Button>
                </Link>
            </Td>
        </Tr>

    );
}