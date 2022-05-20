// dependencies
import React from 'react';
import styled from 'styled-components';
// utilities
import { updateCartQty } from '../services/commerce';

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
  color: ${({ theme: t }) => t.textPrimary};
  font-size: 2rem;
`;

const QuantityText = styled.p`
  color: ${({ theme: t }) => t.textPrimary};
  font-size: 2rem;
  margin-inline: 1rem;
`;

const QuantityButton = styled.button`
  border: 2px solid ${({ theme: t }) => t.textPrimary};
  background-color: ${({ theme: t }) => t.bgPrimary};
  border-radius: 4px;
  color: ${({ theme: t }) => t.textPrimary};
  font-size: 2rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 400ms;

  &:hover {
    background-color: ${({ theme: t }) => t.bgSecondary};
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
  color: ${({ theme: t }) => t.textPrimary};
  font-size: 3rem;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RemoveButton = styled.button`
  border: 2px solid ${({ theme: t }) => t.textPrimary};
  background-color: ${({ theme: t }) => t.bgPrimary};
  font-size: 2rem;
  color: ${({ theme: t }) => t.textPrimary};
  border-radius: 4px;
  transition: background-color 400ms;

  &:hover {
    background-color: ${({ theme: t }) => t.red};
    cursor: pointer;
  }
`;

const CartItem = ({ item }) => {
  const handleUpdateCartQty = async (lineItemId, quantity) => {
    try {
      await updateCartQty(lineItemId, quantity);
      // const cartRes = await updateCartQty(lineItemId, quantity);
      // console.log(cartRes);
    } catch (err) {
      // console.log(err);
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
