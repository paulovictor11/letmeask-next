import { Avatar, Box, Button, Flex, IconButton, Modal, ModalBody, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { FaRegTrashAlt } from 'react-icons/fa';
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
    const { isOpen, onOpen, onClose } = useDisclosure();
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

    const DeleteQuestion = () => {
        return (
            <>
                <ActionButton
                    label="Delete question"
                    url="/images/delete.svg"
                    onClick={onOpen}
                />

                <Modal onClose={onClose} isOpen={isOpen} size="xl" isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalBody>
                            <Flex direction="column" alignItems="center" my={20}>
                                <FaRegTrashAlt color="red" size="40px" />
                                <Text mt={4} fontSize="x-large" fontWeight="bold">
                                    Excluir Pergunta
                                </Text>
                                <Text mt={2} fontSize="md" color="gray.500">
                                    Tem certeza que deseja exluir esta pergunta?
                                </Text>

                                <Flex gap={2} mt={8}>
                                    <Button onClick={onClose}>Cancelar</Button>
                                    <Button colorScheme="red">Sim, excluir</Button>
                                </Flex>
                            </Flex>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </>
        );
    }

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
                    <DeleteQuestion />
                </Flex>
            </Flex>
        </Box>
    );
};

export default QuestionCard;
