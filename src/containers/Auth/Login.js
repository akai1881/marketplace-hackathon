import React, { useState } from 'react';
import { Box, Button, Grid, Link, TextField } from '@material-ui/core';
import { Copyright } from '@material-ui/icons';
import './Login.css';
import useAuth from '../../contexts/AuthContextProvider';
import Alert from '@material-ui/lab/Alert';

const Login = ({ handleClose, setIsOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      handleClose();
    } catch {
      setError('Failed to sign in');
    }

    setLoading(false);
  };

  const handleCloseModal = () => {
    handleClose();
    setIsOpen(true);
  };

  return (
    <div className="login-form-container">
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        <Button
          disabled={loading}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Log In
        </Button>
        <Grid container>
          <Grid item>
            <Link variant="body2" onClick={handleCloseModal}>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </div>
  );
};

export default Login;
