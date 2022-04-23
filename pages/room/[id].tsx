import {
    Badge,
    Box,
    Text,
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import EmptyRoom from '../../src/components/EmptyRoom';
import MakeQuestion from '../../src/components/MakeQuestion';
import Navbar from '../../src/components/Navbar';
import QuestionCard from '../../src/components/QuestionCard';

type RoomProps = {
    id: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{
            params: {
                id: '323243'
            }
        }],
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params!.id;

    return {
        props: { id },
    };
};

const Room: NextPage<RoomProps> = ({ id }) => {
    const isEmpty = false;
    const isAdmin = false;

    const TitleRoom = () => {
        return (
            <Box mb={6}>
                <Text
                    fontSize="x-large"
                    fontWeight="semibold"
                    alignContent="center">
                    Sala React Q{'&'}A
                    
                    {!isEmpty && (
                        <Badge
                            bg="pink.500"
                            color="white"
                            borderRadius="full"
                            px={3}
                            py={1}
                            ml={4}>
                            4 perguntas
                        </Badge>
                    )}
                </Text>
            </Box>
        );
    };

    return (
        <Box>
            <Navbar roomId={id} />
            <Box mx={72} pt={16} pb={8}>
                <TitleRoom />
                
                {!isAdmin && <MakeQuestion />}

                {isEmpty ? (
                    <EmptyRoom />
                ) : (
                    <QuestionCard
                        id="1"
                        question="Olá, eu gostaria de saber como criar um componente funcional dentro do React e se existe diferença na perfomance entre um componente com classes."
                        user="Rachel Laguna Martins"
                        isAnswered={false }
                        isChecked={false}
                    />
                )}
            </Box>
        </Box>
    );
};

export default Room;
