// dependencies
import React from "react";
import styled from "styled-components";
// utilities
import { updateCartQty } from "../services/commerce";

const CartItemContainer = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  padding: 1rem 0 1rem 1rem;
`;

const CartItemImage = styled.img`
  height: 100%;
`;

const CartItemDetailsPrice = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2rem;
`;

const QuantityText = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2rem;
  margin-inline: 1rem;
`;

const QuantityButton = styled.button`
  border: 2px solid ${(props) => props.theme.textPrimary};
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: 4px;
  color: ${(props) => props.theme.textPrimary};
  font-size: 2rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 400ms;

  &:hover {
    background-color: ${(props) => props.theme.bgSecondary};
    cursor: pointer;
  }
`;

const CartItemDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 2rem;
`;

const CartItemName = styled.h4`
  color: ${(props) => props.theme.textPrimary};
  font-size: 3rem;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RemoveButton = styled.button`
  border: 2px solid ${(props) => props.theme.textPrimary};
  background-color: ${(props) => props.theme.bgPrimary};
  font-size: 2rem;
  color: ${(props) => props.theme.textPrimary};
  border-radius: 4px;
  transition: background-color 400ms;

  &:hover {
    background-color: ${(props) => props.theme.red};
    cursor: pointer;
  }
`;

const CartItem = ({ item }) => {
  const handleUpdateCartQty = async (lineItemId, quantity) => {
    try {
      const cartRes = await updateCartQty(lineItemId, quantity);
      console.log(cartRes);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartItemContainer>
      <CartItemImage src={item.image.url} alt={item.name} />
      <CartItemDetails>
        <CartItemName>{item.name}</CartItemName>
        <QuantityContainer>
          <QuantityButton
            type="button"
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </QuantityButton>
          <QuantityText>{item.quantity}</QuantityText>
          <QuantityButton
            type="button"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </QuantityButton>
        </QuantityContainer>
        <RemoveButton type="button">Remove</RemoveButton>
        <CartItemDetailsPrice>
          {item.line_total.formatted_with_symbol}
        </CartItemDetailsPrice>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
