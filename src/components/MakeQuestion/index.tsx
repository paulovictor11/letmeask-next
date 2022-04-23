import { Avatar, Box, Button, Flex, Text, Textarea } from '@chakra-ui/react';
import Link from 'next/link';

const MakeQuestion = () => {
    const isLoggedIn = true;

    const HasUser = () => {
        return (
            <Box>
                {isLoggedIn ? (
                    <Flex alignItems="center">
                        <Avatar
                            name="Nathaly Costa"
                            size="sm"
                            bg="purple.500"
                            color="white"
                        />
                        <Text ml={2} color="gray.500">
                            Nathaly Costa
                        </Text>
                    </Flex>
                ) : (
                    <Text
                        textAlign="center"
                        color="gray.500"
                        fontSize="smaller"
                        mt={2}>
                        Para enviar uma pergunta,&nbsp;
                        <Link href="/" passHref>
                            <Button as="a" color="purple.500" variant="link">
                                <Text fontSize="smaller">faça seu login.</Text>
                            </Button>
                        </Link>
                    </Text>
                )}
            </Box>
        );
    };

    return (
        <Box mb={8}>
            <Textarea placeholder="O que você quer perguntar?" bg="white" focusBorderColor="purple.300" />
            <Flex justifyContent="space-between" alignItems="center" mt={3}>
                <HasUser />
                <Button bg="purple.500" color="white" disabled={!isLoggedIn}>
                    Enviar pergunta
                </Button>
            </Flex>
        </Box>
    );
};

export default MakeQuestion;
