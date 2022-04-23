import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Banner from "../src/components/Banner";

const CreateRoom: NextPage = () => {
    const router = useRouter();

    const handleCreateRoom = () => {
        router.replace('/room/323243');
    }

    return (
        <Flex>
            <Box bg="purple.500" w="45%" h="100vh">
                <Banner />
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
                        <Text textAlign="center" fontSize="x-large" fontWeight="bold" mb={5} mt={12}>
                            Crie uma nova sala
                        </Text>
                        <Input
                            h="50px"
                            placeholder="Nome da sala"
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
                            _focus={{
                                borderColor: 'purple.200'
                            }}
                            _hover={{
                                backgroundColor: 'purple.700',
                            }}
                            onClick={handleCreateRoom}>
                            Criar sala
                        </Button>
                        <Text textAlign="center" color="gray.500" fontSize="smaller" mt={2}>
                            Quer entrar em uma sala já existente?&nbsp;
                            <Link href="/" passHref>
                                <Button as="a" color="purple.50" variant="link">
                                    <Text fontSize="smaller">Clique aqui</Text>
                                </Button>
                            </Link>
                        </Text>
                    </Flex>
                </Center>
            </Box>
        </Flex>
    );
}

export default CreateRoom;