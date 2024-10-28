import React, { useEffect } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../../redux/slices/employeeSlice';

const EmployeeTable = () => {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employee.employees);
    const currentPage = useSelector((state) => state.employee.currentPage);

    useEffect(() => {
        dispatch(fetchEmployees(currentPage));
    }, [dispatch, currentPage]);

    return (
        <Box p={5}>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>Email</Th>
                        <Th>Department</Th>
                        <Th>Salary</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {employees.map((employee) => (
                        <Tr key={employee._id}>
                            <Td>{employee.firstName}</Td>
                            <Td>{employee.lastName}</Td>
                            <Td>{employee.email}</Td>
                            <Td>{employee.department}</Td>
                            <Td>{employee.salary}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default EmployeeTable;
