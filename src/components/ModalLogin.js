import React from 'react';
import Login from '../containers/Auth/Login';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

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
      <DialogTitle id="form-dialog-title">
        <div style={{ display: 'flex', textAlign: 'center' }}>
          <Typography
            variant="h6"
            component="div"
            style={{ flexGrow: 1 }}
          ></Typography>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent>
        <Login
          setIsOpen={setIsOpen}
          setOpen={setOpen}
          handleClose={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalLogin;
