import React from 'react';
import { StyledHeader, StyledInfoHeader } from './styles';
import SearchBar from '../SearchBar';
import CartButton from '../CartButton';

function Header() {
  return (
    <StyledHeader>
      <StyledInfoHeader className="container">
        <SearchBar />
        <CartButton />
      </StyledInfoHeader>
    </StyledHeader>
  );
}

export default Header;
