import React from 'react';
import Login from '../containers/Auth/Login';
import useAuth from '../contexts/AuthContextProvider';
import Profile from '../containers/Profie/Profile';
import { Popover } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    position: 'absolute',
    top: '63px',
    right: '209px',
  },
}));

const ModalLogin = ({ open, handleClose, setIsOpen, setOpen }) => {
  const classes = useStyles();

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
