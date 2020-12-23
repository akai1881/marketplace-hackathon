import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductContextProvider';
import { Grid, Paper } from '@material-ui/core';
import ProductCard from './ProductCard';
import PaginationComp from '../../components/Pagination';
import { useHistory } from 'react-router-dom';

const ProductList = () => {
  const { getProductList, products } = useContext(productsContext);

  const [state, setState] = useState(false);
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = products.slice(indexOfFirstPost, indexOfLastPost);

  const changePage = (num) => setCurrentPage(num);

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <Grid container>
        {history.location.pathname === '/'
          ? currentPost.map((item) => <ProductCard item={item} key={item.id} />)
          : products.map((item) => <ProductCard item={item} key={item.id} />)}
      </Grid>
      {history.location.pathname === '/' ? (
        <PaginationComp
          totalPage={products.length}
          postPerPage={postPerPage}
          changePage={changePage}
        />
      ) : null}
    </>
  );
};

export default ProductList;