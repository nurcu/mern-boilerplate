import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";
import { RiWallet2Line } from 'react-icons/ri';


export default function ConnectButton() {
    const { activateBrowserWallet, account } = useEthers();


    function handleConnectWallet() {
        activateBrowserWallet();
    }

    return (<Box>
        {
            account ? (
                <Box
                    display="flex"
                    alignItems="center"
                    background="gray.700"
                    borderRadius="xl"
                    py="0"
                >
                    <RiWallet2Line />
                    <Button
                        bg="gray.800"
                        border="1px solid transparent"
                        _hover={{
                            border: "1px",
                            borderStyle: "solid",
                            borderColor: "blue.400",
                            backgroundColor: "gray.700",
                        }}
                        borderRadius="xl"
                        m="1px"
                        px={3}
                        height="38px"
                    >
                        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
                            {account &&
                                `${account.slice(0, 6)}...${account.slice(
                                    account.length - 4,
                                    account.length
                                )}`}
                        </Text>
                    </Button>
                </Box>
            ) : (
                <Box
                    display="flex"
                    alignItems="center"
                    background="gray.700"
                    borderRadius="xl"
                    py="0"
                >
                    <RiWallet2Line />
                    <Button onClick={handleConnectWallet}>Connect to a wallet</Button>
                </Box>
            )
        }
    </Box>

    );
}