import {
    Box,
    Button,
    Center,
    Divider as ChakraDivider,
    Flex,
    Input,
    Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { FaSignInAlt } from 'react-icons/fa';
import Image from 'next/image';
import React from 'react';
import Banner from '../src/components/Banner';
import GoogleButton from '../src/components/GoogleButton';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const router = useRouter();

    const handleEnterRoom = () => {
        router.replace('/room/32343');
    }

    const Divider: React.FC = () => {
        return (
            <Flex alignItems="center" justifyContent="space-between" my={6}>
                <ChakraDivider bg="gray.500" w="90px" />
                <Text fontSize="xs" color="gray.500">
                    ou entre em uma sala
                </Text>
                <ChakraDivider bg="gray.500" w="90px" />
            </Flex>
        );
    };

    return (
        <Flex>
            <Box bg="purple.500" w="45%" h="100vh">
                <Banner />
            </Box>
            <Box w="55%" height="100vh">
                <Center h="100vh">
                    <Flex w="320px" direction="column">
                        <Image
                            src="/images/logo.svg"
                            alt="Logo Image"
                            width="154px"
                            height="69px"
                        />
                        <GoogleButton />
                        <Divider />
                        <Input
                            h="50px"
                            placeholder="Digite o código da sala"
                            color="black"
                            borderColor="gray.300"
                            borderWidth="2px"
                            focusBorderColor="purple.500"
                            _hover={{
                                borderColor: "purple.200"
                            }}
                        />
                        <Button
                            mt={4}
                            h="50px"
                            bg="purple.500"
                            color="white"
                            borderColor="purple.500"
                            borderWidth="2px"
                            leftIcon={<FaSignInAlt />}
                            _focus={{
                                borderColor: 'purple.200'
                            }}
                            _hover={{
                                backgroundColor: 'purple.700',
                            }}
                            onClick={handleEnterRoom}>
                            Entrar na sala
                        </Button>
                    </Flex>
                </Center>
            </Box>
        </Flex>
    );
};

export default Home;
