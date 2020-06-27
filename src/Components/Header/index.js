import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Brand from './Brand';
import Navigation from './Navigation';
import InternalLinks from './InternalLinks';

const Header = () => {
  return (
    <header className="Header shadow-sm">
      <Container>
        <Row>
          <Col>
            <Brand />
            <Navigation />
            <InternalLinks />
          </Col>
        </Row>
      </Container>
    </header>
  );
}
 
export default Header;