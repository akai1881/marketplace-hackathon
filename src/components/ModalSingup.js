import React from 'react';
import Modal from '@material-ui/core/Modal';
import Signup from '../containers/Auth/Signup';

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
