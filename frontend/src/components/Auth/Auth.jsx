import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      dispatch(login({ email, password }));
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={5}>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        {error && (
          <Alert status="error" mt={4}>
            {error}
          </Alert>
        )}
        <Button mt={4} colorScheme="teal" type="submit" isLoading={loading}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Auth;
