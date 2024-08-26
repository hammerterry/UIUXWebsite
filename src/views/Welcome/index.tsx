import React, { useState } from 'react';
import { Row, Col, Button, Card, Layout, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { highlightItemList } from '../Product/type'

const { Meta } = Card;
const { Title } = Typography;

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="title">
        <Title>Welcome</Title>
        <Title level={5}>arngen</Title>
        <Button onClick={() => { navigate('/product')}}> Shopping</Button>
      </div>
      <div style={{ paddingTop:'10px',paddingLeft: '5px' }}>

      <Row gutter={[16, 16]}>
          {highlightItemList.map((item) => (
            <Col xs={24} sm={24} md={12} lg={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="item" src={item.image} />}
                onClick={() => navigate('/detail')}
              >
                <Meta title={item.name} description={`$${item.price}`} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Welcome;
