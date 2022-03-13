// dependencies
import React from "react";
import styled from "styled-components";

const ItemCard = styled.li`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const ItemImage = styled.img`
  width: 50%;
  margin-bottom: 2rem;
`;

const ItemName = styled.h4`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  line-height: 1.2;
`;

const ItemText = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const ItemButton = styled.button`
  font-family: Poppins, sans-serif;
  font-size: 1.6rem;
  background-color: ${(props) => props.theme.bgSecondary};
  color: ${(props) => props.theme.textPrimary};
  border: 2px solid ${(props) => props.theme.textSecondary};
  padding: 5px 10px;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.textSecondary};
    color: ${(props) => props.theme.bgSecondary};
  }
`;

const Product = ({ item }) => {
  const itemDescription = item.description.slice(3, -4);

  const handleAdd = () => {
    console.log("Item added to cart", item);
  };

  return (
    <ItemCard>
      <ItemImage src={item.image?.url} alt={item.name} />
      <ItemName>{item.name}</ItemName>
      <ItemText>{itemDescription}</ItemText>
      <ItemText>{item.price.formatted_with_symbol}</ItemText>
      <ItemButton onClick={() => handleAdd(item)}>Add to Cart</ItemButton>
    </ItemCard>
  );
};

export default Product;
