import React, { useEffect } from "react";
import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../redux/actions";

const Dashboard = () => {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    return (
        <Box p={5}>
            <Button>Add Employee</Button>
            <Table variant="simple" mt={4}>
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
                    {employees.map((emp) => (
                        <Tr key={emp._id}>
                            <Td>{emp.firstName}</Td>
                            <Td>{emp.lastName}</Td>
                            <Td>{emp.email}</Td>
                            <Td>{emp.department}</Td>
                            <Td>{emp.salary}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default Dashboard;
