import React from 'react';
import { Row, Col, Input, Select, Checkbox } from 'antd';
import './index.css';

const GENDERS = ['male', 'female', 'unisex'];

/**
 * Search Component: Contains Input fields to change search/filter params in App state (which then triggers new search)
 */
const Search = ({ searchRef, disabled, setSearchTerm, setGender, setOnSale, searchTerm, gender, onSale }) => {
  const handleOnSaleChange = e => {
    const newOnSale = e.target.checked;
    setOnSale(newOnSale);
  };

  const handleSearchChange = e => {
    if (e.key === 'Enter') return;

    setSearchTerm(`${searchTerm}${e.key}`);
  }

  const searchBar = (
    <div className="search">
      <Row align="middle" justify="space-around" gutter={16}>
        <Col offset={2} span={16}>
          <Input
            className="search__title"
            disabled={disabled}
            placeholder="Search by title"
            onKeyPress={handleSearchChange}
            onChange={e => { if (!e.target.value) setSearchTerm('') }}
            value={searchTerm}
            allowClear={true}
            ref={searchRef}
          />
        </Col>
        <Col span={3}>
          <Select
            className="search__gender"
            disabled={disabled}
            placeholder="Filter by gender"
            value={gender}
            onChange={setGender}
            allowClear
          >
            {GENDERS.map(g => (
              <Select.Option
                key={g}
                value={g}
              >
                {g}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col span={3}>
          <Checkbox
            className="search__on-sale"
            disabled={disabled}
            checked={onSale}
            onChange={handleOnSaleChange}
          >
            On Sale
          </Checkbox>
        </Col>
      </Row>
    </div>
  );

  return searchBar;
}

export default Search;
