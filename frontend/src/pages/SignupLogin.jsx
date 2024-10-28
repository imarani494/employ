import React, { useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { signup, login } from "../redux/actions";

const SignupLogin = () => {
    const [isSignup, setIsSignup] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signup({ email, password }));
        } else {
            dispatch(login({ email, password }));
        }
    };

    return (
        <Box p={5}>
            <Text fontSize="2xl">{isSignup ? "Sign Up" : "Log In"}</Text>
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    mb={3}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    mb={3}
                />
                <Button type="submit">{isSignup ? "Sign Up" : "Log In"}</Button>
            </form>
            <Button onClick={() => setIsSignup(!isSignup)} mt={3}>
                Switch to {isSignup ? "Log In" : "Sign Up"}
            </Button>
        </Box>
    );
};

export default SignupLogin;
