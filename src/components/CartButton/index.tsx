import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CardButtonStyle, CarStatus } from './styles';

function CartButton() {
  return (
    <CardButtonStyle type="button">
      <AiOutlineShoppingCart />
      <CarStatus>1</CarStatus>
    </CardButtonStyle>
  );
}

export default CartButton;
