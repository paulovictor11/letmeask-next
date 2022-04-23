import { Center, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

const EmptyRoom = () => {
    return (
        <Center mt={32}>
            <Stack>
                <Image
                    src="/images/empty-questions.svg"
                    alt="No questions in this room"
                    width="153"
                    height="150"
                />
                <Text
                    textAlign="center"
                    fontSize="xl"
                    fontWeight="semibold"
                    mt={2}>
                    Nenhuma pergunta por aqui...
                </Text>
                <Text textAlign="center" fontSize="sm" color="gray.500">
                    Envie o código desta sala para seus amigos e <br />
                    comece a responder perguntas!
                </Text>
            </Stack>
        </Center>
    );
};

export default EmptyRoom;
