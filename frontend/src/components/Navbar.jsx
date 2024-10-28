import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <Box bg="teal" p={4}>
            <Link to="/">
                <Button colorScheme="teal" variant="outline">
                    Home
                </Button>
            </Link>
            <Link to="/dashboard">
                <Button colorScheme="teal" variant="outline" ml={4}>
                    Dashboard
                </Button>
            </Link>
        </Box>
    );
};

export default Navbar;
