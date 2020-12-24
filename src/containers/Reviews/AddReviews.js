import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../../components/Spinner';
import { productsContext } from '../../contexts/ProductContextProvider';

const AddReviews = () => {

    const { editToProduct, saveProduct } = useContext(productsContext)
    const [addReviews, setAddReviews] = useState(editToProduct)

    useEffect(() => {
        setAddReviews(editToProduct)
    }, [editToProduct])

    function handleValue(e) {
        let newObj = {
            ...addReviews,
            [e.target.name]: e.target.value,
        };
        setAddReviews(newObj);
    }

    console.log(addReviews);


    return (

        <div className="addReviews-container">
            <div style={{ textAlign: "center" }}>
                <h1> Добавить комментарий </h1>
            </div>
            {addReviews ?
                <Grid container className="addReviews-content">
                    <Grid item md={6} className="addReviews-person-info-inp">
                        <form className="addReviews-form">
                            <div className="addReviews-input-content">
                                <p style={{ margin: "0 0 8px 0" }}>Name</p>
                                <input
                                    className="addReviews-input"
                                    name="name"
                                    value={addReviews.title}
                                    onChange={handleValue}
                                />
                            </div>
                        </form>
                        <form className="addReviews-form">
                            <div className="addReviews-input-content">
                                <p style={{ margin: "0 0 8px 0" }}>Surname</p>
                                <input
                                    className="addReviews-input"
                                    name="surname"
                                    value={addReviews.size}
                                    onChange={handleValue}
                                />
                            </div>
                        </form>
                    </Grid>
                    <Grid item md={6}>
                        <form className="addReviews-form">
                            <div className="addReviews-input-content">
                                <p style={{ margin: "0 0 8px 0" }}>Comment</p>
                                <input
                                    className="addReviews-input-comment"
                                    name="comment"
                                    value={addReviews.description}
                                    onChange={handleValue}
                                />
                            </div>
                        </form>
                    </Grid>
                    <div style={{ margin: "30px auto 0" }}>
                        <button
                            className="addReviews-btn"
                        // onClick={handleClick}
                        >
                            Добавить
                    </button>
                    </div>
                </Grid>
                : <Spinner />
            }
        </div>
    );
};

export default AddReviews;