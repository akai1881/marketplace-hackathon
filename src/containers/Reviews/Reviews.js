import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../contexts/ProductContextProvider';
import './Reviews.css';

const Reviews = () => {

    const { getProductDetails, productsDetail } = useContext(productsContext)

    useEffect(() => {
        getProductDetails()
    }, [])

    console.log(productsDetail)

    return (
        <>
            <div className="reviews-container">
                <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    <h1 style={{ margin: "0" }}> Отзывы </h1>
                </div>
                {productsDetail.reviews.map((item) =>
                    <div className="reviews-content">
                        <div className="reviews-information">
                            <div className="reviews-title">
                                <h4 style={{ margin: "0", color: "white" }}> {item.name} {item.surname}</h4>
                            </div>
                        </div>
                        <div className="reviews-comment">
                            <p style={{ margin: "0", fontWeight: "500" }}> {item.comment} </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Reviews;