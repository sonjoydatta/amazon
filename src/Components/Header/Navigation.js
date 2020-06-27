import React, { useState } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import {
  rssIcon,
  customerServiceIcon,
  menuIcon,
  cartIcon,
  bellIcon,
  userIcon,
  micIcon,
  searchIcon
} from '../ProboxIcon';
import { categoryOptions } from '../../utils/api-data';

const NavItem = ({ slug, icon, children }) => (
  <li>
    <Link to={slug}>
      <Image fluid src={icon} />
      {children}
    </Link>
  </li>
);

const Navigation = () => {
  const [category, setCategory] = useState('all');

  return (
    <div className="NavigationDesktop">
      <Row className="align-items-center">
        <Col xs={2}>
          <ul className="NavigationDesktop-Nav">
            <NavItem slug="/" icon={rssIcon} />
            <NavItem slug="/" icon={customerServiceIcon} />
            <NavItem slug="/" icon={menuIcon} />
          </ul>
        </Col>
        <Col>
          <div className="NavigationDesktop-SearchBar">
            <div className="h-100 d-flex align-items-center">
              <Select 
                className="NavigationDesktop-SearchBar__Categories"
                classNamePrefix="NavigationDesktop-SearchBar__Categories"
                isSearchable={false}
                options={categoryOptions}
                value={categoryOptions.find(item => item.value === category)}
                onChange={(event) => setCategory(event.value)}
              />
            </div>
            <input 
              className="NavigationDesktop-SearchBar__Keyword" 
              placeholder="I'm looking for"
            />
            <div className="NavigationDesktop-SearchBar__Actions">
              <div className="h-100 d-flex align-items-center">
                <Button
                  variant="link"
                ><Image fluid src={micIcon} /></Button>
                <Button
                  variant="primary"
                ><Image fluid src={searchIcon} /></Button>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={2}>
          <ul className="NavigationDesktop-Nav text-right">
            <NavItem slug="/" icon={cartIcon}>
              <span className="NavigationDesktop-Nav__CartCount rounded-circle">2</span>
            </NavItem>
            <NavItem slug="/" icon={bellIcon} />
            <NavItem slug="/" icon={userIcon} />
          </ul>
        </Col>
      </Row>
    </div>
  );
}
 
export default Navigation;