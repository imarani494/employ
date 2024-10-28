import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const employeeSlice = createSlice({
    name: 'employee',
    initialState: { employees: [], totalPages: 0, currentPage: 1 },
    reducers: {
        setEmployees: (state, action) => {
            state.employees = action.payload.employees;
            state.totalPages = action.payload.totalPages;
            state.currentPage = action.payload.currentPage;
        },
    },
});

export const { setEmployees } = employeeSlice.actions;

export const fetchEmployees = (page) => async (dispatch) => {
    const response = await axios.get(`http://localhost:5000/api/employees?page=${page}`);
    dispatch(setEmployees(response.data));
};

export default employeeSlice.reducer;
