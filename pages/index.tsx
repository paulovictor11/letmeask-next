import {
    Box,
    Button,
    Center,
    Divider as ChakraDivider,
    Flex,
    Grid,
    Input,
    Stack,
    Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { FaGoogle, FaSignInAlt } from 'react-icons/fa';
import Image from 'next/image';
import React from 'react';

const Home: NextPage = () => {
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
                <Stack align="flex-start" ml="84px" mt="123px">
                    <Image
                        src="/images/illustration.svg"
                        alt="Illustration Image"
                        width="320px"
                        height="480px"
                    />
                    <Text fontSize="4xl" fontWeight="bold" color="white" lineHeight="42px">
                        Toda pergunta tem
                        <br />
                        uma resposta
                    </Text>
                    <Text
                        fontSize="larger"
                        color="gray.50"
                        lineHeight="28px"
                        mt={1}>
                        Aprenda e compartilhe conhecimento
                        <br />
                        com outras pessoas
                    </Text>
                </Stack>
            </Box>
            <Box bg="gray.50" w="55%" height="100vh">
                <Center h="100vh">
                    <Flex w="320px" direction="column">
                        <Image
                            src="/images/logo.svg"
                            alt="Logo Image"
                            width="154px"
                            height="69px"
                        />
                        <Button
                            mt={12}
                            h="50px"
                            bg="gray.50"
                            color="black"
                            variant="outline"
                            borderColor="gray.300"
                            borderWidth="2px"
                            leftIcon={<FaGoogle />}
                            _focus={{
                                borderColor: 'purple.200'
                            }}
                            _hover={{
                                backgroundColor: 'white',
                                borderColor: 'purple.200'
                            }}>
                            Crie sua sala com o Google
                        </Button>
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
                            }}>
                            Entrar na sala
                        </Button>
                    </Flex>
                </Center>
            </Box>
        </Flex>
    );
};

export default Home;
