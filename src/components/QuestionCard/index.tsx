import { Avatar, Box, Flex, IconButton, Text } from '@chakra-ui/react';
import CustomIcon from '../CustomIcon';

type QuestionCardProps = {
    id: string;
    question: string;
    user: string;
}

const QuestionCard = ({id, question, user}: QuestionCardProps) => {
    return (
        <Box
            bg="white"
            boxShadow={'sm'}
            rounded={'md'}
            overflow={'hidden'}
            padding="6"
            marginY={3}>
            <Text>{question}</Text>
            <Flex mt={6} justifyContent="space-between">
                <Flex alignItems="center">
                    <Avatar
                        name={user}
                        size="sm"
                        bg="purple.500"
                        color="white"
                    />
                    <Text ml={2} color="gray.500">
                        {user}
                    </Text>
                </Flex>

                <Flex>
                    <IconButton
                        aria-label="check question"
                        variant="ghost"
                        icon={<CustomIcon url="/images/check.svg" />}
                    />
                    <IconButton
                        aria-label="check question"
                        variant="ghost"
                        icon={<CustomIcon url="/images/answer.svg" />}
                    />
                    <IconButton
                        aria-label="check question"
                        variant="ghost"
                        icon={<CustomIcon url="/images/delete.svg" />}
                    />
                </Flex>
            </Flex>
        </Box>
    );
};

export default QuestionCard;
