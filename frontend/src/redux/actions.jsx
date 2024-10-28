import axios from "axios";

export const signup = (userData) => async (dispatch) => {
    try {
        const response = await axios.post("http://localhost:5000/api/auth/signup", userData);
        dispatch({ type: "SIGNUP_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "SIGNUP_FAIL", payload: error.response.data });
    }
};

export const login = (userData) => async (dispatch) => {
    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", userData);
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "LOGIN_FAIL", payload: error.response.data });
    }
};

// Implement additional actions for employee management (add, get, update, delete).
