import { Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

const Banner = () => {
    return (
        <Stack align="flex-start" ml="84px" mt="123px">
            <Image
                src="/images/illustration.svg"
                alt="Illustration Image"
                width="320px"
                height="480px"
            />
            <Text
                fontSize="4xl"
                fontWeight="bold"
                color="white"
                lineHeight="42px">
                Toda pergunta tem
                <br />
                uma resposta
            </Text>
            <Text fontSize="larger" color="gray.50" lineHeight="28px" mt={1}>
                Aprenda e compartilhe conhecimento
                <br />
                com outras pessoas
            </Text>
        </Stack>
    );
};

export default Banner;
