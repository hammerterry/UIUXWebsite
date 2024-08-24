import React, { useState } from 'react';
import { Row, Col, Button, Card, Layout, Typography } from 'antd';

import { FaSearch, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import NavigationHeader from '../../component/NavigationHeader';

const { Meta } = Card;
const { Content, Footer } = Layout;
const { Title } = Typography;
import Item1 from '../../assets/item1.jpg';

const Welcome: React.FC = () => {
  return (
    <div>
      <div className="title">
        <Title>Welcome</Title>
        <Title level={5}>arngen</Title>
        <Button>Shopping</Button>
      </div>
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
        </Row>
      </div>
    </div>
  );
};

export default Welcome;
