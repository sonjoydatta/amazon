import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import { useHome } from '../context/home';
import { dotMenuIcon } from '../ProboxIcon';
import SearchCategory from './SearchCategory';

const SliderItem = ({ slug, icon, title }) => (
  <Link to={slug} className="PopularCategories-Slider__Item">
    <Image 
      fluid 
      className="PopularCategories-Slider__Icon mx-auto" 
      src={icon} 
    />
    <p className="PopularCategories-Slider__Title">{title}</p>
  </Link>
);

const PopularCategories = () => {
  const { categories } = useHome();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 9,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };

  if (categories.length > 0) {
    return (
      <div className="PopularCategories">
        <h3 className="PopularCategories-Heading">Popular Categories</h3>
        <p>Shop from hundreds of categories</p>
        <Row>
          <Col xs={12}>
            <div className="PopularCategories-Slider">
              <div className="PopularCategories-Slider__InnerBox">
                <Row>
                  <Col className="PopularCategories-Slider__FirstCol pr-0">
                    <SliderItem
                      slug="/"
                      icon={dotMenuIcon}
                      title="All Categories"
                    />
                  </Col>
                  <Col className="pl-sm-0">
                    <Slider {...settings}>
                      {
                        categories.map((category, index) => (
                          <SliderItem
                            key={index}
                            slug={category.slug}
                            icon={category.icon}
                            title={category.title}
                          />
                        ))
                      }
                    </Slider>
                  </Col>
                </Row>
                <SearchCategory />
              </div>
            </div>
            <div className="text-right mt-1">
              <Link to="/" className="PopularCategories-More">View More</Link>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  
  return null;
}
 
export default PopularCategories;