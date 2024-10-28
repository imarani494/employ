import React from 'react';
import EmployeeForm from './Dashboard/EmployeeForm';
import EmployeeTable from './Dashboard/EmployeeTable';


const Dashboard = () => {
    return (
        <div>
            <EmployeeForm />
            <EmployeeTable />
        </div>
    );
};

export default Dashboard;
