import { Avatar, Box, Flex, IconButton, Text } from '@chakra-ui/react';
import CustomIcon from '../CustomIcon';

type QuestionCardProps = {
    id: string;
    question: string;
    user: string;
    isAnswered: boolean;
    isChecked: boolean;
};

type ActionButtonProps = {
    label: string;
    url: string;
    onClick?: () => void;
};

const QuestionCard = ({
    id,
    question,
    user,
    isAnswered,
    isChecked,
}: QuestionCardProps) => {
    const bgCard = isAnswered ? 'purple.50' : isChecked ? 'gray.400' : 'white';

    const ActionButton = ({ label, url, onClick }: ActionButtonProps) => {
        return (
            <IconButton
                aria-label={label}
                variant="ghost"
                icon={<CustomIcon url={url} />}
                disabled={isChecked}
                _hover={{
                    backgroundColor: isAnswered ? 'purple.100' : 'gray.100',
                }}
                onClick={onClick}
            />
        );
    };

    return (
        <Box
            bg={bgCard}
            boxShadow={'sm'}
            rounded={'md'}
            overflow={'hidden'}
            padding="6"
            marginY={3}
            borderColor={isAnswered ? 'purple.500' : 'none'}
            borderWidth={isAnswered ? '1px' : '0'}>
            <Text>{question}</Text>
            <Flex mt={6} justifyContent="space-between">
                <Flex alignItems="center">
                    <Avatar
                        name={user}
                        size="sm"
                        bg={isChecked ? 'gray.500' : 'purple.500'}
                        color="white"
                    />
                    <Text ml={2} color="gray.500">
                        {user}
                    </Text>
                </Flex>

                <Flex>
                    <ActionButton
                        label="Check question"
                        url="/images/check.svg"
                    />
                    <ActionButton
                        label="Answer question"
                        url="/images/answer.svg"
                    />
                    <ActionButton
                        label="Delete question"
                        url="/images/delete.svg"
                    />
                </Flex>
            </Flex>
        </Box>
    );
};

export default QuestionCard;
