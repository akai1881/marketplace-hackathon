import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductContextProvider';
import { Grid, Paper, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useAuth from '../../contexts/AuthContextProvider';
import { FaCartArrowDown } from 'react-icons/fa';
import Cart from '../Cart/Cart';

const ProductDetails = (props) => {
  const {
    getProductDetails,
    productsDetail,
    deleteProduct,
    editProduct,
    showSidebar,
    addProductToCart,
    countProductsInCart,
  } = useContext(productsContext);

  const { currentUser } = useAuth();

  useEffect(() => {
    getProductDetails(props.match.params.id);
  }, [props.match.params.id]);

  useEffect(() => {
    getProductDetails(props.match.params.id);
  }, [props.match.params.id]);

  const handleAddToCart = (item) => {
    addProductToCart(item);
    countProductsInCart();
    showSidebar();
  };

  return (
    <div>
      {productsDetail ? (
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
              {currentUser && currentUser.email === 'admin@admin.com' ? (
                <>
                  <button onClick={() => deleteProduct(productsDetail.id)}>
                    Delete
                  </button>
                  <Link to="/editProduct">
                    <button onClick={() => editProduct(productsDetail.id)}>
                      Edit
                    </button>
                  </Link>
                </>
              ) : null}

              <Button onClick={() => handleAddToCart(productsDetail)}>
                <FaCartArrowDown style={{ width: '50px', height: '50px' }} />
              </Button>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};
export default ProductDetails;
