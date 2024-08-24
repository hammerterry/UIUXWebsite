import React, { useState } from 'react';
import {
  Row,
  Col,
  Button,
  Card,
  Layout,
  Menu,
  Checkbox,
  Slider,
  Flex,
} from 'antd';
import { FaSearch, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

import Item1 from '../../assets/item1.jpg';

const { Meta } = Card;
const { Sider } = Layout;

const Product: React.FC = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handlePriceRangeChange = (values: [number, number]) => {
    setPriceRange(values);
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  return (
    // <Flex justify="space-between">
    <Layout style={{ paddingTop: '5px' }}>
      <Sider width={300} className="site-layout-background">
        <Menu
          mode="vertical"
          style={{
            width: 300,
            height: '100%',
            borderRight: 0,
            padding: '24px',
          }}
        >
          <Menu.Item style={{ height: '200px' }}>
            <h3>Price Range</h3>
            <Slider
              range
              min={0}
              max={100}
              value={priceRange}
              onChange={handlePriceRangeChange}
            />
            <p>
              ${priceRange[0]} - ${priceRange[1]}
            </p>
          </Menu.Item>
          <Menu.Item style={{ height: '200px' }}>
            <h3>Categories</h3>
            <Checkbox.Group
              options={['Category A', 'Category B', 'Category C', 'Category D']}
              value={selectedCategories}
              onChange={handleCategoryChange}
            />
          </Menu.Item>
        </Menu>
      </Sider>
      <div style={{ paddingLeft: '5px' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={Item1} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={Item1} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={Item1} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={Item1} />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
    // </Flex>
  );
};

export default Product;
