import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Paper, Typography } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import useAuth from '../contexts/AuthContextProvider';
import Alert from '@material-ui/lab/Alert';

const MenuProfile = ({ anchorEl, handleClose }) => {
  const id = Boolean(anchorEl) ? 'simple-popover' : undefined;
  const { logout } = useAuth();
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    setError('');

    try {
      await logout();
      handleClose();
    } catch {
      setError('Failed to logout');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Popover
        id={id}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Paper
          style={{
            minWidth: '100px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {error && <Alert severity="error">{error}</Alert>}
          <Typography style={{ color: 'black' }}>
            {currentUser && currentUser.email}
          </Typography>
          <Button onClick={handleLogout}>Log Out</Button>
        </Paper>
      </Popover>
    </div>
  );
};

export default MenuProfile;
