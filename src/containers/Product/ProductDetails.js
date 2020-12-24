import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductContextProvider';
import { Grid, Paper, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useAuth from '../../contexts/AuthContextProvider';
import Spinner from '../../components/Spinner';
import { Zoom } from 'react-slideshow-image';
import { formatNumber } from '../../helpers/formatPrice';
import ReactStars from 'react-rating-stars-component';

const ProductDetails = (props) => {
  const {
    getProductDetails,
    productsDetail,
    deleteProduct,
    editProduct,
    showSidebar,
    addProductToCart,
    countProductsInCart,
    setRating,
    // rating,
  } = useContext(productsContext);

  const [rating] = useState(productsDetail);

  const { currentUser } = useAuth();

  useEffect(() => {
    getProductDetails(props.match.params.id);
  }, [props.match.params.id]);

  const handleAddToCart = (item) => {
    addProductToCart(item);
    countProductsInCart();
    showSidebar();
  };

  const handleChange = (value) => {
    const newObj = {
      ...rating,
      rating: value,
    };
    setRating(newObj, props.match.params.id);
  };

  const images = [
    productsDetail ? productsDetail.images[0] : 'hello',
    productsDetail ? productsDetail.images[1] : 'hello',
  ];

  return (
    <>
      {productsDetail ? (
        <div className="product-details-container">
          <h1 className="product-details-title"> {productsDetail.title} </h1>
          <Grid container className="product-details-content">
            <Grid item md={7}>
              <div className="product-details-slider">
                <Zoom scale={0.4}>
                  {images.map((each, index) => (
                    <img key={index} style={{ width: '100%' }} src={each} />
                  ))}
                </Zoom>
                {/* <img style={{ width: "450px", marginTop: "-45px" }} src={productsDetail.images[0]} alt="" /> */}
              </div>
            </Grid>
            <Grid item md={5}>
              <div className="product-details-info">
                <div className="product-details-top-content">
                  <div className="product-details-price">
                    {formatNumber(productsDetail.price)} RUB
                  </div>
                  <ReactStars
                    size={30}
                    value={productsDetail.rating}
                    onChange={(value) => handleChange(value)}
                  />
                  <div className="product-detail-admin">
                    <Link to="/">
                      <button
                        className="product-details-delete-btn"
                        onClick={() => deleteProduct(productsDetail.id)}
                      >
                        {' '}
                        <DeleteIcon style={{ color: 'white' }} />{' '}
                      </button>
                    </Link>
                    <Link to="/editProduct">
                      <button
                        className="product-details-edit-btn"
                        onClick={() => editProduct(productsDetail.id)}
                      >
                        {' '}
                        <EditIcon style={{ color: 'white' }} />{' '}
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="product-details-delivery">
                  <p>(Доставка по миру - 850 RUB, по Кыргызстану - 50 СОМ)</p>
                </div>
                <div className="product-details-line"></div>
                <div className="product-details-description">
                  <p> {productsDetail.description} </p>
                </div>
                <div className="product-details-structure">
                  <p>Состав: {productsDetail.structure} </p>
                </div>
                <div className="product-details-size-content">
                  <p>Выберите размер:</p>
                  <div className="product-details-sizes">
                    <button className="sizes" value="XS">
                      XS
                    </button>
                    <button className="sizes" value="S">
                      S
                    </button>
                    <button className="sizes" value="M">
                      M
                    </button>
                    <button className="sizes" value="L">
                      L
                    </button>
                    <button className="sizes" value="XL">
                      XL
                    </button>
                    <button className="sizes" value="2XL">
                      2XL
                    </button>
                    <button className="sizes" value="3XL">
                      3XL
                    </button>
                  </div>
                </div>
                <div className="product-details-count-and-cart">
                  <div className="product-details-count">
                    <p>Количество: </p>
                    <input type="number" />
                  </div>
                  <div
                    className="product-details-cart"
                    onClick={() => handleAddToCart(productsDetail)}
                  >
                    Добавить в корзину
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="product-details-recommendations">
            <div className="product-details-recommendations-title">
              <h1>
                Рекомендуем к{' '}
                <span
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '5px',
                  }}
                >
                  покупке
                </span>
              </h1>
            </div>
            <div className="product-details-recommendations-slider"></div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default ProductDetails;
