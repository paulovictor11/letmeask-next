import { Box, Center, Flex, IconButton, Text } from '@chakra-ui/react';
import Image from 'next/image';
import CloseRoom from '../CloseRoom';
import CustomIcon from '../CustomIcon';

type NavbarProps = {
    roomId: string;
};

const Navbar = ({ roomId }: NavbarProps) => {
    const RoomBadge = () => {
        return (
            <Flex h="40px">
                <IconButton
                    bg="purple.500"
                    color="white"
                    aria-label="Copy room id"
                    icon={<CustomIcon url="/images/copy.svg" />}
                    borderRightRadius={0}
                    borderLeftRadius="8px"
                    _hover={{ backgroundColor: 'purple.700' }}
                />
                <Box
                    borderColor="purple.400"
                    borderWidth="1px"
                    borderRightRadius="8px"
                    px={4}
                    __css={{ minW: '150px' }}>
                    <Center w="100%" h="40px">
                        <Text fontWeight="semibold">Sala #{roomId}</Text>
                    </Center>
                </Box>
            </Flex>
        );
    };

    return (
        <Box
            bg="gray.50"
            alignSelf="center"
            px={36}
            py={2}
            borderBottom="gray.100"
            borderWidth="1px">
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                    <Image
                        src="/images/logo.svg"
                        alt="Logo Image"
                        width="100px"
                        height="45px"
                    />
                </Box>

                <Flex alignItems={'center'} gap={2}>
                    <RoomBadge />
                    <CloseRoom />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;
