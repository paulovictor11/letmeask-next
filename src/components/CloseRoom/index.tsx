import {
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { FaRegTimesCircle } from 'react-icons/fa';

const CloseRoom = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button
                w="131px"
                variant="outline"
                color="purple.400"
                borderColor="purple.400"
                _focus={{ borderColor: 'purple.400' }}
                onClick={onOpen}>
                Encerrar Sala
            </Button>

            <Modal onClose={onClose} isOpen={isOpen} size="xl" isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Flex direction="column" alignItems="center" my={20}>
                            <FaRegTimesCircle color="red" size="40px" />
                            <Text mt={4} fontSize="x-large" fontWeight="bold">
                                Encerrar sala
                            </Text>
                            <Text mt={2} fontSize="md" color="gray.500">
                                Tem certeza que deseja encerrar esta sala?
                            </Text>

                            <Flex gap={2} mt={8}>
                                <Button onClick={onClose}>Cancelar</Button>
                                <Button colorScheme="red">Sim, encerrar</Button>
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CloseRoom;
