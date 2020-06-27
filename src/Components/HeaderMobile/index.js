import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {
  cartIcon,
  bellIcon,
  userIcon
} from '../ProboxIcon';
import Brand from '../Header/Brand';

const NavItem = ({ slug, icon, children }) => (
  <li>
    <Link to={slug}>
      <Image fluid src={icon} />
      {children}
    </Link>
  </li>
);

const HeaderMobile = () => (
  <header className="Header HeaderMobile shadow-sm">
    <Container>
      <Row>
        <Col xs={6}>
          <Brand />
        </Col>
        <Col xs={6}>
          <ul className="NavigationDesktop-Nav text-right">
            <NavItem slug="/" icon={cartIcon}>
              <span className="NavigationDesktop-Nav__CartCount rounded-circle">2</span>
            </NavItem>
            <NavItem slug="/" icon={bellIcon} />
            <NavItem slug="/" icon={userIcon} />
          </ul>
        </Col>
      </Row>
    </Container>
  </header>
);
 
export default HeaderMobile;