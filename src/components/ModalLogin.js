import React from 'react';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import Login from '../containers/Auth/Login';
import useAuth, { AuthContextProvider } from '../contexts/AuthContextProvider';
import Profile from '../containers/Profie/Profile';

const ModalLogin = ({ id, open, anchorEl, handleClose, setIsOpen }) => {
  const { currentUser } = useAuth();

  return (
    <Popover
      id={id}
      open={open}
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
      <Paper>
        {currentUser ? (
          <Profile handleClose={handleClose} />
        ) : (
          <Login setIsOpen={setIsOpen} handleClose={handleClose} />
        )}
      </Paper>
    </Popover>
  );
};

export default ModalLogin;
