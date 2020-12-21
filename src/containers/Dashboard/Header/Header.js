import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './Header.css';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <header className="header">
      <div className="header-first">
        <img src="" className="header-logo" alt="" />
      </div>
      <div className="header-nav">
        <ul className="header-menu">
          <li className="header-menu-item">Новинки</li>
          <li className="header-menu-item">Футболки</li>
          <li className="header-menu-item">Свитшоты</li>
          <li className="header-menu-item">худи</li>
          <li className="header-menu-item">рубашки</li>
          <li className="header-menu-item">кепки</li>
          <li className="header-menu-item">шапки</li>
          <li className="header-menu-item">поло</li>
          <li className="header-menu-item">рюкзаки</li>
          <li className="header-menu-item">сувениры</li>
          <li className="header-menu-item">добавить товар</li>
        </ul>
        <div className="header-options">
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            style={{ color: 'white' }}
          >
            <AccountCircle />
          </IconButton>
          <IconButton
            aria-label="show 11 new notifications"
            color="white"
            style={{ color: 'white' }}
          >
            <Badge badgeContent={11} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
