import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Signup from '../containers/Auth/Signup';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';

const ModalSignup = ({ open, setIsOpen, handleClick }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
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
        <Signup />
      </DialogContent>
    </Dialog>
  );
};

export default ModalSignup;
