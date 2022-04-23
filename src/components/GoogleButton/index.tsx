import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';

const GoogleButton: React.FC = () => {
    return (
        <Link href="/create-room" passHref>
            <Button
            as="a"
            mt={12}
            h="50px"
            bg="gray.50"
            color="black"
            variant="outline"
            borderColor="gray.300"
            borderWidth="2px"
            leftIcon={<FaGoogle />}
            _focus={{
                borderColor: 'purple.200',
            }}
            _hover={{
                backgroundColor: 'white',
                borderColor: 'purple.200',
            }}>
            Crie sua sala com o Google
        </Button>
        </Link>
    );
};

export default GoogleButton;
