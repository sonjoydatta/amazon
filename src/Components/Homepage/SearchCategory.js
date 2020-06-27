import React from 'react';
import { Image } from 'react-bootstrap';

import { searchGrayIcon } from '../ProboxIcon';

const SearchCategory = () => (
  <div className="PopularCategories-SearchBox mx-auto">
    <input 
      className="PopularCategories-SearchBox__Control" 
      placeholder="Search for category"
    />
    <Image src={searchGrayIcon} className="PopularCategories-SearchBox__Icon" />
  </div>
);
 
export default SearchCategory;