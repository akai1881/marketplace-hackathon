import React from 'react';
import Login from '../containers/Auth/Login';
import useAuth from '../contexts/AuthContextProvider';
import Profile from '../containers/Profie/Profile';

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
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      classes={{ paper: classes.dialogWrapper }}
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
