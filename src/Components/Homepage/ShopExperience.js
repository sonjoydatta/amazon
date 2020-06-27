import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useHome } from '../context/home';
import arrowUpIcon from '../../assets/images/icons/arrow-up-line.svg';

const BoxItem = ({ icon, slug, title, subTitle }) => (
  <Col xs={6} md={4} lg={2}>
    <div className="ShopExperience-Item">
      <Link to={slug}>
        <Image src={icon} />
        <h6 className="ShopExperience-Item__Title" dangerouslySetInnerHTML={{ __html: title}} />
        <p className="ShopExperience-Item__SubTitle">{subTitle}</p>
        <Image src={arrowUpIcon} className="ShopExperience-Item__LinkIcon" />
      </Link>
    </div>
  </Col>
);

const ShopExperience = () => {
  const { shopBlocks } = useHome();

  if (shopBlocks.length > 0) {
    return (
      <div className="ShopExperience">
        <h3 className="ShopExperience-Heading">Happy Shopping</h3>
        <p>Enjoy unique online shopping experience that make you smile</p>
        <Row>
          {
            shopBlocks.map((block, index) => (
              <BoxItem 
                key={index}
                icon={block.icon}
                title={block.title}
                subTitle={block.subTitle}
                slug={block.slug}
              />
            ))
          }
        </Row>
      </div>
    );
  }

  return null;
}
 
export default ShopExperience;