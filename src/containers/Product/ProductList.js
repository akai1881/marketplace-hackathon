import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductContextProvider';
import { Grid, Paper } from '@material-ui/core';
import ProductCard from './ProductCard';
import PaginationComp from '../../components/Pagination';

const ProductList = () => {
  const { getProductList, products } = useContext(productsContext);

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
<<<<<<< HEAD
    <>
      <Grid container>
        {currentPost.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </Grid>
      <PaginationComp
        totalPage={products.length}
        postPerPage={postPerPage}
        changePage={changePage}
      />
    </>
=======
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((item) => (
        <Link to={`/details/${item.id}`} key={item.id}>
          <Paper

            style={{ width: '250px', height: '250px', margin: '10px' }}
          >
            <h1 style={{ color: 'black' }}>{item.title}</h1>
          </Paper>
        </Link>
      ))}
    </div>
>>>>>>> master
  );
};

export default ProductList;
