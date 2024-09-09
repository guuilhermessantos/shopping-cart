import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { SearchBarStyle, SearchButton, SearchInput } from './styles';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <SearchBarStyle>
      <SearchInput
        type="search"
        value={searchValue}
        placeholder="Buscar Produtos"
        className=""
        required
        onChange={({ target }) => setSearchValue(target.value)}
      />
      <SearchButton type="submit">
        <BsSearch />
      </SearchButton>
    </SearchBarStyle>
  );
}

export default SearchBar;
