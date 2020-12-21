import React from 'react';
import './Footer.css';
import Grid from '@material-ui/core/Grid';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-menu">
                    <ul>
                        <li>Новинки</li>
                        <li>Футболки</li>
                        <li>Свитшоты</li>
                        <li>Худи</li>
                        <li>Рубашки</li>
                        <li>Кепки</li>
                        <li>Шапки</li>
                        <li>Поло</li>
                        <li>Рюкзаки</li>
                        <li>Сувениры</li>
                        <li>Memes</li>
                    </ul>
                </div>
                <Grid container>
                    <Grid item md={6} className="footer-left">
                        <div className="footer-left-content">
                            <h1 className="footer-left-title">JOLY.BELL</h1>
                            <img style={{ width: "40px", height: "40px" }} src="https://image.flaticon.com/icons/png/512/36/36917.png" alt="" />
                            <img style={{ width: "40px", height: "40px" }} src="https://image.flaticon.com/icons/png/512/25/25425.png" alt="" />
                        </div>
                        <div>
                            <p>© 2020, JolyBell.com</p>
                        </div>
                    </Grid>
                    <Grid item md={6} className="footer-right">
                        <div className="footer-right-content">
                            <div className="footer-right-email">
                                <p>E-MAIL:</p>
                                <a href="">jolybellstore@gmail.com</a>
                            </div>
                            <div className="footer-right-working-hours">
                                <p>ВРЕМЯ РАБОТЫ СЛУЖБЫ ПОДДЕРЖКИ:</p>
                                <p>ПН-ПТ: 9:00 - 21:00</p>
                            </div>
                        </div>
                        <div className="footer-right-payment-options">
                            <p>ПРИНИМАЕМ К ОПЛАТЕ:</p>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </Grid>
                </Grid>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <p>Доставка по России осуществляется службами доставки: «Почта России». <br />
                    «Почта России» осуществляет доставку до почтового отделения, индекс которого Вы укажите при оформлении заказа.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;