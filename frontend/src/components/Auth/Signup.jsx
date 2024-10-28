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
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import axios from "axios";
import { setAuth } from "../../redux/slices/authSlice";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Create navigate instance

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        {
          username,
          email,
          password
        }
      );
      dispatch(
        setAuth({ token: response.data.token, user: response.data.user })
      );
      navigate("/login"); // Navigate to login page using navigate
    } catch (err) {
      setError("Signup failed. Please check your details and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box p={5}>
      <form onSubmit={handleSubmit}>
        <FormControl id="username" isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired mt={4}>
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
        <FormControl id="confirm-password" isRequired mt={4}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        {error && (
          <Alert status="error" mt={4}>
            {error}
          </Alert>
        )}
        <Button mt={4} colorScheme="teal" type="submit" isLoading={loading}>
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
