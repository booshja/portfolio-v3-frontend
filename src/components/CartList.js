// dependencies
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
// components
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
// redux global state
import { selectCart } from "../slices/commerceSlice";

const CartListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const ListContainer = styled.div`
  margin-bottom: 2rem;
  width: 80%;
`;

const CartTotal = styled.div`
  display: flex;
  margin: 0 20% 2rem 0;
  align-self: flex-end;

  & p:nth-of-type(2) {
    margin-left: 1rem;
  }
`;

const CartTotalText = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2.5rem;
`;

const CartButton = styled.button`
  background-color: #68a2b9;
  border-radius: 4px;
  border: 2px solid #68a2b9;
  color: ${(props) => props.theme.textPrimary};
  transition: background-color 400ms;
  padding: 5px 10px;
  font-size: 2rem;

  &:hover {
    background-color: ${(props) => props.theme.bgSecondary};
    cursor: pointer;
  }
`;

const CartFooter = styled.div`
  align-self: flex-end;
  margin-right: 20%;

  & button:nth-of-type(1) {
    margin-right: 2rem;
  }
`;

const CartList = ({ setIsCheckout }) => {
  const cart = useSelector(selectCart);

  return (
    <CartListContainer>
      {cart.total_unique_items > 0 ? (
        <>
          <ListContainer>
            {cart.line_items.map((lineItem) => (
              <CartItem item={lineItem} key={lineItem.id} />
            ))}
          </ListContainer>
          <CartTotal>
            <CartTotalText>Subtotal:</CartTotalText>
            <CartTotalText>{cart.subtotal.formatted_with_symbol}</CartTotalText>
          </CartTotal>
          <CartFooter>
            <CartButton type="button">Empty Cart</CartButton>
            <CartButton type="button" onClick={() => setIsCheckout(true)}>
              Checkout
            </CartButton>
          </CartFooter>
        </>
      ) : (
        <p>
          There&apos;s nothing in your cart&hellip;{" "}
          <Link to="/store">Go add something</Link>!
        </p>
      )}
    </CartListContainer>
  );
};

export default CartList;
