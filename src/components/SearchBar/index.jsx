import { Input } from 'antd';
import { KeyboardEventHandler } from 'react';

const SearchBar = () => {

  const handleKeyUp = (e) => {
    console.log(e.target.value);
  }

  return (<Input
    placeholder="Enter search term"
    allowClear={true}
    onKeyUp={handleKeyUp}
  />);
}

export default SearchBar;