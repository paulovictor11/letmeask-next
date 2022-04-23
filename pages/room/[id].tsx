import { Box, Button, Flex, Stack } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Navbar from '../../src/components/Navbar';

type RoomProps = {
    id: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params!.id;

    return {
        props: { id },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    };
};

const Room: NextPage<RoomProps> = ({ id }) => {
    return (
        <Box height="100vh" bg="gray.50">
            <Navbar roomId={id} />
        </Box>
    );
};

export default Room;
