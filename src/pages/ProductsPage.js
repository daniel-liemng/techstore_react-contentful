import React, { useContext } from 'react';

import { ProductContext } from '../context/context';

const Products = () => {
  console.log(useContext(ProductContext));

  return <div>Products</div>;
};

export default Products;
