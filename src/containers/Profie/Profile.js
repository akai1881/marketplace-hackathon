import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import useAuth from '../../contexts/AuthContextProvider';

const Profile = ({ handleClose }) => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState('');

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
    <>
      {currentUser ? (
        <>
          <h1>{currentUser.email}</h1>
          <Button onClick={handleLogout}>Log Out</Button>
        </>
      ) : null}
    </>
  );
};

export default Profile;
