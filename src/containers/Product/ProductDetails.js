import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../contexts/ProductContextProvider';
import { Grid, Paper } from '@material-ui/core';

const ProductDetails = (props) => {

    const { getProductDetails, productsDetail } = useContext(productsContext)

    useEffect(() => {
        getProductDetails(props.match.params.id)
    }, [props.match.params.id])

    console.log(productsDetail)

    return (
        <div>
            <Grid container>
                <Grid item md={9}>
                    <Paper>
                        <Grid item md={9}>
                            <Paper style={{ textAlign: "center" }}>
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
                                            <td> {productsDetail.size} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Paper>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductDetails;