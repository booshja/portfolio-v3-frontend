// dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Assets
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// components
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageContainer, MainContent } from "./styles/containers";
import { LoadingSpinner, ProductsList } from "../../components";
import { PageTitle } from "./styles/typography";
// services
import commerce from "../../services/commerce";

const StoreContainer = styled(PageContainer)`
  background-color: ${(props) => props.theme.bgPrimary};
`;

const CartLink = styled(Link)`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2.5rem;
  align-self: flex-end;
`;

// const ComingSoonText = styled.p`
//   color: ${(props) => props.theme.textPrimary};
//   font-size: 4rem;
//   margin-top: 2rem;
//   margin-left: 2rem;
// `;

const Store = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsRes = await commerce.products.list();
        setProducts(productsRes.data);
        setLoading(false);
      } catch (err) {
        console.log("Product loading error", err);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <StoreContainer>
        <PageTitle>store()</PageTitle>
        <MainContent className="center">
          <LoadingSpinner />
        </MainContent>
      </StoreContainer>
    );
  }

  return (
    <StoreContainer>
      <PageTitle>store()</PageTitle>
      <CartLink to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
        &nbsp;({0})
      </CartLink>
      <MainContent className="slide-in-left">
        <ProductsList items={products} />
      </MainContent>
    </StoreContainer>
  );
};

export default Store;
