import React, { useState } from 'react';
import { Row, Col, Button, Card, Layout, Typography ,Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { highlightItemList } from '../Product/type';

const { Meta } = Card;
const { Title,Text } = Typography;

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ display: 'flex' , justifyContent:'center' , alignItems:'center', height: '20vh'}}>
      <Space direction="vertical">
        <Title>Welcome</Title>
        <Text style={{ marginLeft: '50px' }} type="secondary">arngen</Text>
        <Button style={{ marginLeft: '30px' }}
          onClick={() => {
            navigate('/product');
          }}
        >
          Shopping
        </Button>
        </Space>
      </div>
      <div style={{  display: 'flex' ,justifyContent:'center',alignItems:'center', paddingTop: '10px', paddingLeft: '5px' }}>
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
