import React from 'react';
import './Footer.css';
import Grid from '@material-ui/core/Grid';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-menu">
          <ul className="footer-menu-ul">
            <li className="footer-menu-li" >Все товары</li>
            <li className="footer-menu-li"  >Футболки</li>
            <li className="footer-menu-li" >Свитшоты</li>
            <li className="footer-menu-li" >Худи</li>
            <li className="footer-menu-li" >Рубашки</li>
            <li className="footer-menu-li" >Кепки</li>
            <li className="footer-menu-li" >Шапки</li>
            <li className="footer-menu-li" >Поло</li>
            <li className="footer-menu-li" >Рюкзаки</li>
            <li className="footer-menu-li" >Сувениры</li>
          </ul>
        </div>
        <Grid container>
          <Grid item md={6} className="footer-left">
            <div className="footer-left-content">
              <h1 style={{ color: "white" }}>JOLY.BELL</h1>
              <div className="footer-socials">
                <img
                  style={{ width: '40px', height: '40px' }}
                  src="https://image.flaticon.com/icons/png/512/36/36917.png"
                  alt=""
                />
                <img
                  style={{ width: '40px', height: '40px' }}
                  src="https://image.flaticon.com/icons/png/512/25/25425.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <p style={{ color: "white" }}>© 2020, JolyBell.com</p>
            </div>
          </Grid>
          <Grid item md={6} className="footer-right">
            <div className="footer-right-content">
              <div className="footer-right-email">
                <p style={{ color: "white" }}>E-MAIL:</p>
                <a href="">jolybellstore@gmail.com</a>
              </div>
              <div className="footer-right-working-hours">
                <p style={{ color: "white" }}>ВРЕМЯ РАБОТЫ СЛУЖБЫ ПОДДЕРЖКИ:</p>
                <p style={{ color: "white" }}>ПН-ПТ: 9:00 - 21:00</p>
              </div>
            </div>
            <div className="footer-right-payment-options">
              <p style={{ color: "white" }}>ПРИНИМАЕМ К ОПЛАТЕ:</p>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </Grid>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p style={{ color: "white" }}>
            Доставка по России осуществляется службами доставки: «Почта России».{' '}
            <br />
            «Почта России» осуществляет доставку до почтового отделения, индекс
            которого Вы укажите при оформлении заказа.
          </p>
        </div>
      </div>
    </div >
  );
};

export default Footer;
