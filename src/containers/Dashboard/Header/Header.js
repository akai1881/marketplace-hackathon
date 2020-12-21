import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-first">
        <img src="" className="header-logo" alt="" />
      </div>
      <div className="header-second">
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
        </ul>
      </div>
    </header>
  );
};

export default Header;
