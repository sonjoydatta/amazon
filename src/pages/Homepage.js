import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { HomeContext } from '../Components/context/home';
import { homeHeroBanner, homeCategories, homeShopBlocks } from '../utils/api-data';
import HeroBanner from '../Components/Homepage/HeroBanner';
import PopularCategories from '../Components/Homepage/PopularCategories';
import ShopExperience from '../Components/Homepage/ShopExperience';

const Homepage = () => {
  return (
    <HomeContext.Provider value={{
      heroBanner: homeHeroBanner,
      shopBlocks: homeShopBlocks,
      categories: homeCategories
    }}>
      <Container>
        <Row>
          <Col>
            <HeroBanner />
            <PopularCategories />
            <ShopExperience />
          </Col>
        </Row>
      </Container>
    </HomeContext.Provider>
  );
}
 
export default Homepage;