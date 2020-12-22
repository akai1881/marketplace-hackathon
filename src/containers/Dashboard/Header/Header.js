import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import ModalLogin from '../../../components/ModalLogin';
import ModalSignup from '../../../components/ModalSingup';
import useAuth from '../../../contexts/AuthContextProvider';
import MenuProfile from '../../../components/Menu';

const useStyles = makeStyles((theme) => ({
  headerBtn: {
    color: 'white',
  },
}));

const Header = () => {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickOpen = (event) => {
    if (currentUser) {
      setAnchorEl(event.currentTarget);
    }
    if (!currentUser) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (currentUser) {
      setAnchorEl(null);
    }
    setOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-first">
          <img src="" className="header-logo" alt="" />
        </div>
        <div className="header-nav">
          <ul className="header-menu">
            <li className="header-menu-item">Все товары</li>
            <li className="header-menu-item">Футболки</li>
            <li className="header-menu-item">Свитшоты</li>
            <li className="header-menu-item">худи</li>
            <li className="header-menu-item">рубашки</li>
            <li className="header-menu-item">кепки</li>
            <li className="header-menu-item">шапки</li>
            <li className="header-menu-item">поло</li>
            <li className="header-menu-item">рюкзаки</li>
            <li className="header-menu-item">сувениры</li>
            {currentUser && currentUser.email === 'admin@admin.com' ? (
              <li className="header-menu-item">Добавить товар</li>
            ) : null}
          </ul>
          <div className="header-options">
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="default"
              className={classes.headerBtn}
              onClick={handleClickOpen}
            >
              <AccountCircle />
            </IconButton>

            <ModalLogin
              open={open}
              setOpen={setOpen}
              handleClose={handleClose}
              setIsOpen={setIsOpen}
              title="Log In"
            />
            <MenuProfile
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              handleClose={handleClose}
            />
            <ModalSignup open={isOpen} setIsOpen={setIsOpen} />
            <IconButton
              aria-label="show 11 new notifications"
              color="default"
              className={classes.headerBtn}
            >
              <Badge badgeContent={11} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
