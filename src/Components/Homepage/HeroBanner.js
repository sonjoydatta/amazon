import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useHome } from '../context/home';

const HeroBanner = () => {
  const { heroBanner } = useHome();

  if (Object.keys(heroBanner).length > 0) {
    return (
      <div className="HeroBanner">
        <Link to={heroBanner.slug}>
          <Image fluid src={heroBanner.image} alt={heroBanner.title} />
        </Link>
      </div>
    );
  }

  return null;
}
 
export default HeroBanner;