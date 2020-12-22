import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductContextProvider';
import { Grid, Paper } from '@material-ui/core';
import ProductCard from './ProductCard';
<<<<<<< HEAD
// import PaginationComp from '../../components/Pagination';
=======
import PaginationComp from '../../components/Pagination';
>>>>>>> master

const ProductList = () => {
  const { getProductList, products } = useContext(productsContext);

<<<<<<< HEAD
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage] = useState(9);

  // const indexOfLastPost = currentPage * postPerPage;
  // const indexOfFirstPost = indexOfLastPost - postPerPage;
  // const currentPost = products.slice(indexOfFirstPost, indexOfLastPost);

  // const changePage = (num) => setCurrentPage(num);
=======
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = products.slice(indexOfFirstPost, indexOfLastPost);

  const changePage = (num) => setCurrentPage(num);
>>>>>>> master

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <Grid container>
        {currentPost.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </Grid>
<<<<<<< HEAD
      {/* <PaginationComp
        totalPage={products.length}
        postPerPage={postPerPage}
        changePage={changePage}
      /> */}
=======
      <PaginationComp
        totalPage={products.length}
        postPerPage={postPerPage}
        changePage={changePage}
      />
>>>>>>> master
    </>
  );
};

export default ProductList;