import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'react-scroll'

const PaginationComp = ({ totalPage, postPerPage, changePage }) => {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalPage / postPerPage); i++) {
    pageNums.push(i);
  }

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
    >
      <Link to="product-container" spy={true} smooth={true} duration={400}>
        <Pagination
          count={pageNums.length}
          onChange={(e, page) => changePage(page)}
        />
      </Link>
    </div>
  );
};

export default PaginationComp;
