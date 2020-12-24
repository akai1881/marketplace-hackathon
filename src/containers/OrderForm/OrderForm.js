import React, { useContext, useState } from 'react';
import Cards from 'react-credit-cards';
import './OrderForm.css';
import 'react-credit-cards/es/styles-compiled.css';
import Wrapper from '../Dashboard/Wrapper';
import { Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { calcTotalPrice } from '../../helpers/calcPrice';
import { useToasts } from 'react-toast-notifications';
import { productsContext } from '../../contexts/ProductContextProvider';
import { Link as Scroll } from 'react-scroll';

const OrderForm = () => {
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [focus, setFocus] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { getCart } = useContext(productsContext);
  const { addToast } = useToasts();

  const history = useHistory();

  const cart = JSON.parse(localStorage.getItem('cart'));

  const formatNumber = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');
  };

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleClick = () => {
    history.push('/');
    localStorage.clear();
    getCart();
    addToast('Спасибо за покупку! Товар скоро будет у вас :)', {
      appearance: 'success',
      autoDismiss: true,
    });
  };

  return (
    <Wrapper>
      <div className="order-form-container">
        <div className="order-form-content">
          <div className="order-form-title">
            <h1 style={{ margin: '0' }}>Оформление заказа</h1>
          </div>
          <Cards
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
          />
          <Grid container>
            <Grid item xs={2} />
            <Grid item container xs={8}>
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
                      required
                      maxLength={16}
                      name="number"
                      onChange={(e) => setNumber(e.target.value)}
                      onFocus={handleInputFocus}
                    />
                  </div>
                  <div className="order-form-input-content">
                    <p>Name</p>
                    <input
                      className="order-form-inp"
                      type="text"
                      required
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      onFocus={handleInputFocus}
                    />
                  </div>
                  <div className="order-form-input-content">
                    <p>Expiry</p>
                    <input
                      className="order-form-inp"
                      type="tel"
                      required
                      name="expiry"
                      maxLength={4}
                      onChange={(e) => setExpiry(e.target.value)}
                      onFocus={handleInputFocus}
                    />
                  </div>
                  <div className="order-form-input-content">
                    <p>CVC</p>
                    <input
                      className="order-form-inp"
                      type="tel"
                      required
                      name="cvc"
                      maxLength={3}
                      onChange={(e) => setCvc(e.target.value)}
                      onFocus={handleInputFocus}
                    />
                  </div>
                </form>
              </Grid>
              <Grid
                container
                item
                md={6}
                className="order-form-right-content"
                justify="center"
              >
                <div className="order-form-right-title">
                  <div className="order-products">
                    <div className="order-products-title">Ваш заказ</div>
                    <div className="order-products-tile">
                      {cart.products.map((item) => (
                        <div
                          className="order-products-product"
                          key={item.product.id}
                        >
                          <div className="order-products-product-content">
                            <Link to={`/details/${item.product.id}`}>
                              <span className="order-products-product-name">
                                {item.product.title}
                              </span>
                            </Link>
                            <div className="order-products-product-count">
                              <span className="order-products-product-count-tile">
                                Колличество:{' '}
                              </span>
                              <span className="order-products-product-count-value">
                                {item.count}
                              </span>
                            </div>
                            <div className="order-products-product-price">
                              {formatNumber(item.product.price)} RUB
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="order-product-price-wrapper">
                        <div className="order-product-totalprice">
                          <span className="order-product-price-name">
                            Итого к оплате:
                          </span>
                          <span className="order-product-price-value">
                            {formatNumber(calcTotalPrice(cart))} RUB
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={2} />
          </Grid>
          <div className="order-form-button-container">
            <Scroll to="header" spy={true} smooth={true} duration={500}>
              <button className="order-form-button" onClick={handleClick}>
                Оплатить
              </button>
            </Scroll>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default OrderForm;
// import { Grid } from '@material-ui/core';
// import React from 'react';
// import Cards from 'react-credit-cards';
// import 'react-credit-cards/es/styles-compiled.css';
// import './OrderForm.css';
// import { calcTotalPrice } from '../../helpers/calcPrice';
// import { Link } from 'react-router-dom';
// const formatNumber = (x) => {
//   return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');
// };

// const cart = JSON.parse(localStorage.getItem('cart'));

// export default class PaymentForm extends React.Component {
//   state = {
//     cvc: '',
//     expiry: '',
//     focus: '',
//     name: '',
//     number: '',
//   };

//   handleInputFocus = (e) => {
//     this.setState({ focus: e.target.name });
//   };

//   handleInputChange = (e) => {
//     const { name, value } = e.target;

//     this.setState({ [name]: value });
//   };

//   handleClick = () => {
//     history.push('/');
//     localStorage.clear();
//     getCart();
//     addToast('Спасибо за покупку! Товар скоро будет у вас :)', {
//       appearance: 'success',
//       autoDismiss: true,
//     });
//   };

//   render() {
//     return (
//       <div className="order-form-container">
//         <div className="order-form-content">
//           <div className="order-form-title">
//             <h1 style={{ margin: '0' }}>Оформление заказа</h1>
//           </div>
//           <Cards
//             cvc={this.state.cvc}
//             expiry={this.state.expiry}
//             focused={this.state.focus}
//             name={this.state.name}
//             number={this.state.number}
//           />
//           <Grid container>
//             <Grid item xs={2} />
//             <Grid item container xs={8}>
//               <Grid item md={6} className="order-form-left-content">
//                 <div className="order-form-left-title">
//                   <h3>Введите данные для доставки</h3>
//                 </div>
//                 <form className="order-form-left-form">
//                   <div className="order-form-input-content">
//                     <p>Card number</p>
//                     <input
//                       className="order-form-inp"
//                       type="tel"
//                       maxLength={16}
//                       name="number"
//                       onChange={this.handleInputChange}
//                       onFocus={this.handleInputFocus}
//                     />
//                   </div>
//                   <div className="order-form-input-content">
//                     <p>Name</p>
//                     <input
//                       className="order-form-inp"
//                       type="text"
//                       name="name"
//                       onChange={this.handleInputChange}
//                       onFocus={this.handleInputFocus}
//                     />
//                   </div>
//                   <div className="order-form-input-content">
//                     <p>Expiry</p>
//                     <input
//                       className="order-form-inp"
//                       type="tel"
//                       name="expiry"
//                       maxLength={4}
//                       onChange={this.handleInputChange}
//                       onFocus={this.handleInputFocus}
//                     />
//                   </div>
//                   <div className="order-form-input-content">
//                     <p>CVC</p>
//                     <input
//                       className="order-form-inp"
//                       type="tel"
//                       name="cvc"
//                       maxLength={3}
//                       onChange={this.handleInputChange}
//                       onFocus={this.handleInputFocus}
//                     />
//                   </div>
//                 </form>
//               </Grid>
//               <Grid
//                 container
//                 item
//                 md={6}
//                 className="order-form-right-content"
//                 justify="center"
//               >
//                 <div className="order-form-right-title">
//                   <div className="order-products">
//                     <div className="order-products-title">Ваш заказ</div>
//                     <div className="order-products-tile">
//                       {cart.products.map((item) => (
//                         <div
//                           className="order-products-product"
//                           key={item.product.id}
//                         >
//                           <div className="order-products-product-content">
//                             <Link to={`/details/${item.product.id}`}>
//                               <span className="order-products-product-name">
//                                 {item.product.title}
//                               </span>
//                             </Link>
//                             <div className="order-products-product-count">
//                               <span className="order-products-product-count-tile">
//                                 Колличество:{' '}
//                               </span>
//                               <span className="order-products-product-count-value">
//                                 {item.count}
//                               </span>
//                             </div>
//                             <div className="order-products-product-price">
//                               {formatNumber(item.product.price)} RUB
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                       <div className="order-product-price-wrapper">
//                         <div className="order-product-totalprice">
//                           <span className="order-product-price-name">
//                             Итого к оплате:
//                           </span>
//                           <span className="order-product-price-value">
//                             {formatNumber(calcTotalPrice(cart))} RUB
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Grid>
//             </Grid>
//             <Grid item xs={2} />
//           </Grid>
//           <div className="order-form-button-container">
//             <button className="order-form-button" onClick={handleClick}>
//               Оплатить
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
