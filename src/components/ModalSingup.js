import React from 'react';
import Modal from '@material-ui/core/Modal';
import Signup from '../containers/Auth/Signup';

const ModalSignup = ({ open, setIsOpen, handleClick }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setIsOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Signup setIsOpen={setIsOpen} handleClick={handleClick} />
      </Modal>
    </div>
  );
};

export default ModalSignup;
