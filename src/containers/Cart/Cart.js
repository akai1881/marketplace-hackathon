import React, { useContext } from 'react';
import { FaChevronLeft, FaTimes } from 'react-icons/fa';
import { TiMinus, TiPlus } from 'react-icons/ti';
import { productsContext } from '../../contexts/ProductContextProvider';
import './Cart.css';
import CartData from './CartData';
import { calcSubPrice } from '../../helpers/calcPrice';
import { calcTotalPrice } from '../../helpers/calcPrice';

const Cart = () => {
  const { sidebar, showSidebar } = useContext(productsContext);
  const { changeCountInCart, addProductToCart, chooseSize } = useContext(
    productsContext
  );

  const cart = JSON.parse(localStorage.getItem('cart'));

  const formatNumber = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');
  };

  const handleClick = (id, e) => {
    const size = e.currentTarget.dataset.size;
    chooseSize(id, size);
  };

  return (
    <>
      <div className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
        <div className="sidebar-menu-items">
          <div className="sidebar-toggle" onClick={showSidebar}>
            <FaChevronLeft />
            <span className="sidebar-toggle-text">Продолжить покупку</span>
          </div>
          <div className="sidebar-title">Мои покупки</div>
          {cart &&
            cart.products.map((item) => (
              <div key={item.product.id}>
                <div className="sidebar-cart-product">
                  <div className="sidebar-cart-content">
                    <div className="cart-content-image">
                      <picture>
                        <source
                          srcSet="https://jolybell.com/storage/Zpg2MZzSFU81.webp?preview=&width=192&height=232&quality=100"
                          type="image/webp"
                        />
                        <img src="https://jolybell.com/storage/Zpg2MZzSFU81.png?preview=&width=192&height=232" />
                      </picture>
                    </div>
                    <div className="cart-content-information">
                      <div className="cart-content-title">
                        {item.product.title}
                      </div>
                      <div className="cart-content-sizes">
                        <div className="cart-content-sizes-title">Размеры:</div>
                        <div className="cart-content-sizes-list">
                          {CartData.map((data) => (
                            <button
                              onClick={(e) => handleClick(item.product.id, e)}
                              data-size={data.title}
                              className={data.className}
                              key={data.id}
                            >
                              {item.size === data.title ? (
                                <span className="size-active">{item.size}</span>
                              ) : (
                                <span>{data.title}</span>
                              )}
                            </button>
                          ))}
                        </div>
                        <div className="cart-content-count">
                          <div className="cart-content-count-title">
                            Колличество:
                          </div>
                          <div className="cart-content-count-counter">
                            <button
                              className="btn-count-minus"
                              onClick={() =>
                                changeCountInCart(item.product.id, 'MINUS')
                              }
                            >
                              <TiMinus />
                            </button>
                            <input
                              type="text"
                              className="cart-content-count-input"
                              onChange={(e) =>
                                changeCountInCart(
                                  item.product.id,
                                  e.target.value
                                )
                              }
                              value={item.count}
                            />
                            <button
                              className="btn-count-plus"
                              onClick={() =>
                                changeCountInCart(item.product.id, 'PLUS')
                              }
                            >
                              <TiPlus />
                            </button>
                          </div>
                        </div>
                        <div className="cart-content-price">
                          {formatNumber(calcSubPrice(item))} RUB
                        </div>
                      </div>
                    </div>
                    <div
                      className="cart-content-remove"
                      onClick={() => addProductToCart(item.product)}
                    >
                      <FaTimes />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className="cart-total">
            <span>Итого:</span>
            <div className="cart-total-price">
              {formatNumber(calcTotalPrice(cart))} RUB
            </div>
          </div>
          <div className="cart-btn-wrapper">
            <button className="cart-btn-order">
              <span>оформить заказ</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
