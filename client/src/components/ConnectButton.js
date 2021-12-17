import { Button, Text, HStack } from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";
import { RiWallet3Fill } from 'react-icons/ri';


export default function ConnectButton() {
    const { activateBrowserWallet, account } = useEthers();

    function handleConnectWallet() {
        activateBrowserWallet();
    }

    return (

        account ? (
            <HStack>
                <RiWallet3Fill color="white" />}
                <Text color="#f1c68c" fontSize="md" fontWeight="medium" mr="2">
                    {account &&
                        `${account.slice(0, 6)}...${account.slice(account.length - 4, account.length)}`}
                </Text>
            </HStack>
        ) : (
            <Button
                bg="transparent"
                color="white"
                leftIcon={<RiWallet3Fill />}
                onClick={handleConnectWallet}
                _hover={{
                  bg: '#1e0a11',
                  color: 'white',
                }}
            >
                <Text color="#f1c68c" fontSize="sm" mr="2">
                    Connect to a wallet
                </Text>
            </Button>
        )
    );
}