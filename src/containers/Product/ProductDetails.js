import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductContextProvider';
import { Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
        <div>
            {productsDetail ?
                <Grid container>
                    <Grid item md={9}>
                        <Paper>
                            <Grid item md={9}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Title:</td>
                                            <td>{productsDetail.title}</td>
                                        </tr>
                                        <tr>
                                            <td>Price:</td>
                                            <td>{productsDetail.price}</td>
                                        </tr>
                                        <tr>
                                            <td>Description</td>
                                            <td> {productsDetail.description} </td>
                                        </tr>
                                        <tr>
                                            <td>Structure</td>
                                            <td> {productsDetail.structure} </td>
                                        </tr>
                                        <tr>
                                            <td>Size</td>
                                            <td> {productsDetail.id} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Grid>
                            <button onClick={() => deleteProduct(productsDetail.id)}>Delete</button>
                            <Link to="/editProduct">
                                <button onClick={() => editProduct(productsDetail.id)} >Edit</button>
                            </Link>
                        </Paper>
                    </Grid>
                </Grid>
                : <h1>Loading</h1>
            }
        </div>
    );
}
export default ProductDetails;
