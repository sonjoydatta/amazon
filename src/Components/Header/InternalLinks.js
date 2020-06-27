import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Dropdown } from 'react-bootstrap';

const InternalLinks = () => {
  return (
    <div className="InternalLinks mx-auto">
      <Row className="align-items-center">
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="link" id="DropdownCategories">
              Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="link" id="DropdownBrands">
              Brands
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <span className="h-100 border-right"></span>
          <Link to="/" className="InternalLinks-Single">Deals!</Link>
        </Col>
        <Col>
          <div className="text-right">
            <Link to="/" className="InternalLinks-Single text-black-50">Community</Link>
            <Link to="/" className="InternalLinks-Single text-black-50">Blog</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}
 
export default InternalLinks;