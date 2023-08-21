import { useState } from 'react';
import { Container, Typography, TextField, Button, makeStyles } from '@material-ui/core';
import { useNavigate,Navigate } from 'react-router-dom/dist/umd/react-router-dom.development';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const Login = () => {
    const navigate = useNavigate();
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    navigate('/blogs'); 
  };

  const handleRegister = () => {
    
    navigate('/register');
    console.log('Register:', { username, password });
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form className={classes.form}>
        <TextField
          label="Username"
          value={username}
          onChange={handleUsernameChange}
          variant="outlined"
        />
        <TextField
          label="Password"
          value={password}
          onChange={handlePasswordChange}
          variant="outlined"
          type="password"
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="outlined" color="primary" onClick={handleRegister}>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Login;
