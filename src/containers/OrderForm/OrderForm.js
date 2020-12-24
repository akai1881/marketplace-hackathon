import { Grid } from '@material-ui/core';
import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './OrderForm.css';

export default class PaymentForm extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="order-form-container">
                <div className="order-form-content">
                    <div className="order-form-title">
                        <h1 style={{ margin: "0" }}>Оформление заказа</h1>
                    </div>
                    <Cards
                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focused={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}
                    />
                    <Grid container >
                        <Grid item md={6} className="order-form-left-content">
                            <div className="order-form-left-title">
                                <h3>Введите данные для доставки</h3>
                            </div>
                            <form className="order-form-left-form">
                                <div className="order-form-input-content">
                                    <p>Card number</p>
                                    <input
                                        className="order-form-inp"
                                        type="tel"
                                        maxLength={16}
                                        name="number"
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                    />
                                </div>
                                <div className="order-form-input-content">
                                    <p>Name</p>
                                    <input
                                        className="order-form-inp"
                                        type="text"
                                        name="name"
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                    />
                                </div>
                                <div className="order-form-input-content">
                                    <p>Expiry</p>
                                    <input
                                        className="order-form-inp"
                                        type="tel"
                                        name="expiry"
                                        maxLength={4}
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                    />
                                </div>
                                <div className="order-form-input-content">
                                    <p>CVC</p>
                                    <input
                                        className="order-form-inp"
                                        type="tel"
                                        name="cvc"
                                        maxLength={3}
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                    />
                                </div>
                            </form>
                        </Grid>
                        <Grid item md={6} className="order-form-right-content">
                            <div className="order-form-right-title">
                                <h3>Ваш заказ</h3>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="order-form-button-container">
                        <button className="order-form-button" >Оплатить</button>
                    </div>
                </div>
            </div>
        );
    }
}