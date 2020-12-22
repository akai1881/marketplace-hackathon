import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import ModalLogin from '../../../components/ModalLogin';
import ModalSignup from '../../../components/ModalSingup';
import useAuth from '../../../contexts/AuthContextProvider';
<<<<<<< HEAD
import MenuProfile from '../../../components/Menu';
import { productsContext } from '../../../contexts/ProductContextProvider';
import { useHistory } from 'react-router-dom';
import MenuData from './MenuData';
=======
import { Link } from 'react-router-dom';
>>>>>>> master

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
  const { getProductList } = useContext(productsContext);
  const history = useHistory();

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

  const addParams = (e, params) => {
    const data = e.currentTarget.dataset.product;
    if (data === 'all') {
      history.push(history.location.pathname.replace(params));
      getProductList();
      return;
    }
    let search = new URLSearchParams(history.location.search);
    search.set(params, data);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProductList();
  };

  return (
    <>
      <header className="header">
        <div className="header-first">
          <img src="" className="header-logo" alt="" />
        </div>
        <div className="header-nav">
          <ul className="header-menu">
            {MenuData.map((item) => (
              <li
                className={item.className}
                data-product={item.category}
                onClick={(e) => addParams(e, 'category=')}
              >
                {item.title}
              </li>
            ))}
            {currentUser && currentUser.email === 'admin@admin.com' ? (
              <Link to="/addProduct">
                <li className="header-menu-item">Добавить товар</li>
              </Link>
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
