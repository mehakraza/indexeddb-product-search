import React from 'react';
import { Row, Col, Spin, Input, Select, Checkbox } from 'antd';
import './index.css';

const GENDERS = ['male', 'female', 'unisex'];

const Search = ({ searchRef, searching, setSearchTerm, setGender, setOnSale, searchTerm, gender, onSale }) => {
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
            style={{ width: '100%' }}
            placeholder="Filter by gender"
            value={gender}
            onChange={setGender}
            allowClear
          >
            {GENDERS.map(g => <Select.Option key={g} value={g}>{g}</Select.Option>)}
          </Select>
        </Col>
        <Col span={3}>
          <Checkbox checked={onSale} onChange={handleOnSaleChange}>On Sale</Checkbox>
        </Col>
      </Row>
    </div>
  );

  if (searching) return (
    <Spin size='large' tip="Searching...">{searchBar}</Spin>
  );

  return searchBar;
}

export default Search;
