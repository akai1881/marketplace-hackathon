import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductContextProvider';
import { Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const ProductDetails = (props) => {
    const { getProductDetails, productsDetail, deleteProduct, editProduct } = useContext(productsContext);

    useEffect(() => {
        getProductDetails(props.match.params.id);
    }, [props.match.params.id]);

    console.log(props)

    useEffect(() => {
        getProductDetails(props.match.params.id)
    }, [props.match.params.id])

    console.log(productsDetail)

    return (
        <>
            {productsDetail ?
                <div className="product-details-container">
                    <h1 className="product-details-title"> {productsDetail.title} </h1>
                    <Grid container className="product-details-content">
                        <Grid item md={7}>
                            <div className="product-details-slider">
                                <img style={{ width: "450px", marginTop: "-45px" }} src={productsDetail.images[0]} alt="" />
                            </div>
                        </Grid>
                        <Grid item md={5}>
                            <div className="product-details-info">
                                <div className="product-details-top-content">
                                    <div className="product-details-price">
                                        {productsDetail.price}
                                    </div>
                                    <Link to="/">
                                        <button className="product-details-delete-btn" onClick={() => deleteProduct(productsDetail.id)}> <DeleteIcon style={{ color: "white" }} /> </button>
                                    </Link>
                                    <Link to="/editProduct">
                                        <button className="product-details-edit-btn" onClick={() => editProduct(productsDetail.id)} > <EditIcon style={{ color: "white" }} /> </button>
                                    </Link>

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
                                    <div className="product-details-cart">
                                        Добавить в корзину
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="product-details-recommendations">
                        <div className="product-details-recommendations-title">
                            <h1>Рекомендуем к <span style={{ backgroundColor: "black", color: "white", padding: "5px" }}>покупке</span></h1>
                        </div>
                        <div className="product-details-recommendations-slider">

                        </div>
                    </div>
                </div>
                : <h1>Loading</h1>
            }
        </>
    );
}
export default ProductDetails;
