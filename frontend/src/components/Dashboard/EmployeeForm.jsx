import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import axios from 'axios';

const EmployeeForm = ({ fetchEmployees }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/employees', { firstName, lastName, email, department, salary });
        fetchEmployees();
    };

    return (
        <Box p={5}>
            <form onSubmit={handleSubmit}>
                <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </FormControl>
                <FormControl id="lastName" isRequired mt={4}>
                    <FormLabel>Last Name</FormLabel>
                    <Input value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </FormControl>
                <FormControl id="email" isRequired mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="department" isRequired mt={4}>
                    <FormLabel>Department</FormLabel>
                    <Input value={department} onChange={(e) => setDepartment(e.target.value)} />
                </FormControl>
                <FormControl id="salary" isRequired mt={4}>
                    <FormLabel>Salary</FormLabel>
                    <Input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
                </FormControl>
                <Button mt={4} colorScheme="teal" type="submit">
                    Add Employee
                </Button>
            </form>
        </Box>
    );
};

export default EmployeeForm;
