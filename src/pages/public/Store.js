// dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
// Assets
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { LoadingSpinner, ProductsList } from "../../components";
import { PageContainer, MainContent } from "./styles/containers";
import { PageTitle } from "./styles/typography";
// redux global state
import {
  selectProducts,
  selectCart,
  selectOrder,
  setCart,
  setOrder,
  setProducts,
  setReceipt,
} from "../../slices/commerceSlice";
// services
import {
  getProducts,
  getCart,
  addToCart,
  updateCartQty,
  removeFromCart,
  refreshCart,
  emptyCart,
  captureCheckout,
} from "../../services/commerce";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart);
  const order = useSelector(selectOrder);

  const handleAddToCart = async (itemId, quantity) => {
    try {
      const newCart = await addToCart(itemId, quantity);
      dispatch(setCart(newCart));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    try {
      const newCart = await updateCartQty(lineItemId, quantity);
      dispatch(setCart(newCart));
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveFromCart = async (lineItemId) => {
    try {
      const newCart = await removeFromCart(lineItemId);
      dispatch(setCart(newCart));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEmptyCart = async () => {
    try {
      const newCart = await emptyCart();
      dispatch(setCart(newCart));
    } catch (err) {
      console.log(err);
    }
  };

  const handleRefreshCart = async () => {
    try {
      const newCart = await refreshCart();
      dispatch(setCart(newCart));
    } catch (err) {
      console.log(err);
    }
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const orderRes = await captureCheckout(checkoutTokenId, newOrder);
      dispatch(setOrder(orderRes));
      refreshCart();
      navigate("/confirmation");
      dispatch(setReceipt(order));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const productsRes = await getProducts();
        dispatch(setProducts(productsRes));

        const cartRes = await getCart();
        dispatch(setCart(cartRes));

        setLoading(false);
      } catch (err) {
        console.log(err);
        // push to error page
      }
    };

    getData();
  }, []);

  if (loading) {
    return (
      <MainContent className="center">
        <LoadingSpinner />
      </MainContent>
    );
  }

  // console.log(cart);

  return (
    <>
      <CartLink to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
        &nbsp;({cart.total_items})
      </CartLink>
      <MainContent className="slide-in-left">
        <ProductsList items={products} handleAddToCart={handleAddToCart} />
      </MainContent>
    </>
  );
};

export default Store;
