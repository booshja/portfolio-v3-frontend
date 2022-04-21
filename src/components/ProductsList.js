// dependencies
import React from "react";
import styled from "styled-components";
// components
import Product from "./Product";

const ProductsListContainer = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const ProductsList = ({ items, handleAddToCart }) => (
  <ProductsListContainer>
    {items.map((product) => (
      <Product
        key={product.id}
        item={product}
        handleAddToCart={handleAddToCart}
      />
    ))}
  </ProductsListContainer>
);

export default ProductsList;
