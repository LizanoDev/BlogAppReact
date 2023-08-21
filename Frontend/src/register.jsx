import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));

const RegisterForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegistration = () => {
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Create an object with the registration data
    const registrationData = {
      email,
      username,
      password,
    };

    // Send a POST request to the registration endpoint on the server
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    })
      .then((response) => {
        if (response.ok) {
          // Registration successful, display a success message to the user
          alert("Registration successful");
        } else if (response.status === 409) {
          // User already exists, display an error message to the user
          alert("User already exists");
        } else {
          // Registration failed, display an error message to the user
          alert("Registration failed");
        }
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        // Handle the error (e.g., display an error message to the user)
      });
  };

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Register as a new user!
      </Typography>
      <form onSubmit={handleRegistration} className={classes.form}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          id="email"
        />
        <TextField
          label="Username"
          type="text"
          fullWidth
          required
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          id="username"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          id="password"
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
