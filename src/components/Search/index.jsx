import React, { useState, useCallback, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { Spin, Input } from 'antd';
import { searchDB } from '../../utils/operations';

const Search = ({ setProducts }) => {
  const [searching, setSearching] = useState(false);

  const debouncedSearch = useMemo(
    () => debounce(async searchTerm => {
      setSearching(true);
      const products = await searchDB(searchTerm);
      setProducts(products);
      setSearching(false);
    }, 1000),
    [setProducts],
  );

  const handleChange = useCallback(
    e => debouncedSearch(e.target.value),
    [debouncedSearch],
  );

  if (searching) return <Spin size='large' />;

  return (
    <Input
      placeholder="Enter search term"
      allowClear={true}
      onKeyUp={handleChange}
    />
  );
}

export default Search;
