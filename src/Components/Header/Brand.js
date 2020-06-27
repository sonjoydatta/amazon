import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import siteLogo from '../../assets/images/logo.png';

const Brand = () => (
  <div className="Header-Brand">
    <Link to="/">
      <Image fluid src={siteLogo} alt="Amazon" />
    </Link>
  </div>
);
 
export default Brand;