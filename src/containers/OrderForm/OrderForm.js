// import React, { useContext, useState } from 'react';
// import Cards from 'react-credit-cards';
// import './OrderForm.css';
// import 'react-credit-cards/es/styles-compiled.css';
// import Wrapper from '../Dashboard/Wrapper';
// import { Grid } from '@material-ui/core';
// import { Link, useHistory } from 'react-router-dom';
// import { calcTotalPrice } from '../../helpers/calcPrice';
// import { useToasts } from 'react-toast-notifications';
// import { productsContext } from '../../contexts/ProductContextProvider';

// const OrderForm = () => {
//   const [cvc, setCvc] = useState('');
//   const [expiry, setExpiry] = useState('');
//   const [focus, setFocus] = useState('');
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const { getCart } = useContext(productsContext);
//   const { addToast } = useToasts();

//   const history = useHistory();

//   const cart = JSON.parse(localStorage.getItem('cart'));

//   const formatNumber = (x) => {
//     return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');
//   };

//   const handleInputFocus = (e) => {
//     setFocus(e.target.name);
//   };

//   const handleClick = () => {
//     history.push('/');
//     localStorage.clear();
//     getCart();
//     addToast('Спасибо за покупку! Товар скоро будет у вас :)', {
//       appearance: 'success',
//       autoDismiss: true,
//     });
//   };

//   return (
//     <Wrapper>
//       <Grid container>
//         <Grid item xs={2} />
//         <Grid container item xs={8}>
//           <Grid item xs={7}>
//             <div className="order">
//               <div id="PaymentForm">
//                 <Cards
//                   cvc={cvc}
//                   expiry={expiry}
//                   focused={focus}
//                   name={name}
//                   number={number}
//                 />
//                 <form className="form-order">
//                   <div className="form-order-detail">
//                     <p className="form-order-title">Номер карты</p>
//                     <input
//                       type="tel"
//                       required
//                       className="form-order-input"
//                       name="number"
//                       maxLength={16}
//                       onChange={(e) => setNumber(e.target.value)}
//                       onFocus={handleInputFocus}
//                     />
//                   </div>
//                   <div className="form-order-detail">
//                     <p className="form-order-title">Ваше имя</p>
//                     <input
//                       type="tel"
//                       required
//                       className="form-order-input"
//                       name="name"
//                       onChange={(e) => setName(e.target.value)}
//                       onFocus={handleInputFocus}
//                     />
//                   </div>

//                   <div className="form-order-detail">
//                     <p className="form-order-title">Дата окончания</p>
//                     <input
//                       type="tel"
//                       required
//                       className="form-order-input"
//                       name="expiry"
//                       maxLength={4}
//                       onChange={(e) => setExpiry(e.target.value)}
//                       onFocus={handleInputFocus}
//                     />
//                   </div>
//                   <div className="form-order-detail">
//                     <p className="form-order-title">CVC</p>
//                     <input
//                       type="tel"
//                       required
//                       className="form-order-input"
//                       name="cvc"
//                       maxLength={3}
//                       onChange={(e) => setCvc(e.target.value)}
//                       onFocus={handleInputFocus}
//                     />
//                   </div>
//                   <div className="form-order-detail">
//                     <p className="form-order-title">почтовый индекс</p>
//                     <input
//                       type="tel"
//                       required
//                       className="form-order-input"
//                       name="index"
//                     />
//                   </div>
//                   <div className="form-order-detail">
//                     <p className="form-order-title">Адрес</p>
//                     <input
//                       type="tel"
//                       required
//                       className="form-order-input"
//                       name="adress"
//                     />
//                   </div>
//                   <button className="form-btn-order" onClick={handleClick}>
//                     <span>оплатить</span>
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </Grid>
//           <Grid container item xs={5} justify="flex-end">
//             <div className="order-products">
//               <div className="order-products-title">Ваш заказ</div>
//               <div className="order-products-tile">
//                 {cart.products.map((item) => (
//                   <div className="order-products-product" key={item.product.id}>
//                     <div className="order-products-product-content">
//                       <Link to={`/details/${item.product.id}`}>
//                         <span className="order-products-product-name">
//                           {item.product.title}
//                         </span>
//                       </Link>
//                       <div className="order-products-product-count">
//                         <span className="order-products-product-count-tile">
//                           Колличество:{' '}
//                         </span>
//                         <span className="order-products-product-count-value">
//                           {item.count}
//                         </span>
//                       </div>
//                       <div className="order-products-product-price">
//                         {formatNumber(item.product.price)} RUB
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//                 <div className="order-product-price-wrapper">
//                   <div className="order-product-totalprice">
//                     <span className="order-product-price-name">
//                       Итого к оплате:
//                     </span>
//                     <span className="order-product-price-value">
//                       {formatNumber(calcTotalPrice(cart))} RUB
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Grid>
//         </Grid>
//         <Grid item xs={2} />
//       </Grid>
//     </Wrapper>
//   );
// };

// export default OrderForm;
