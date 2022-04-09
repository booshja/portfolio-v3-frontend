// dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// redux global state
import { setCart, selectCart } from "../../slices/commerceSlice";
// components
import { MainContent } from "./styles/containers";
import { PageTitle } from "./styles/typography";
import { LoadingSpinner, CartList, Checkout } from "../../components";
// utilities
import { getCart } from "../../services/commerce";

const CartContainer = styled(MainContent)`
  display: flex;
  flex-direction: column;
`;

const Cart = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [isCheckout, setIsCheckout] = useState(false);

  const cart = useSelector(selectCart);

  useEffect(() => {
    async function getCartData() {
      try {
        const cartData = await getCart();
        dispatch(setCart(cartData));
        setLoading(false);
      } catch (err) {
        console.log(err);
        // push to error page
      }
    }

    getCartData();
  }, []);

  if (loading) {
    return (
      <>
        <PageTitle>cart()</PageTitle>
        <MainContent className="center">
          <LoadingSpinner />
        </MainContent>
      </>
    );
  }

  return (
    <CartContainer className="slide-in-left" id="main-content">
      <PageTitle>cart({cart.total_unique_items})</PageTitle>
      {isCheckout ? <Checkout /> : <CartList setIsCheckout={setIsCheckout} />}
    </CartContainer>
  );
};

export default Cart;
