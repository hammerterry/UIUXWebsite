import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Image, Button, Typography, Space, Select } from 'antd';
import { itemList } from '../Product/type';

const { Text, Title } = Typography;

const Detail: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{ paddingTop: '5px' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          type="primary"
          onClick={() => {
            navigate('/product');
          }}
        >
          Back
        </Button>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginLeft: '50px', width: '500px' }}>
          <div>
            <Image
              preview={false}
              width={300}
              height={300}
              src={itemList[0].image}
            />
          </div>
          <div>
            <Image
              preview={false}
              width={100}
              height={100}
              src={itemList[0].image}
            />
            <Image
              preview={false}
              width={100}
              height={100}
              src={itemList[0].image}
            />
            <Image
              preview={false}
              width={100}
              height={100}
              src={itemList[0].image}
            />
          </div>
        </div>
        <Space direction="vertical">
          <Title level={3}>Bicycle 1</Title>
          <Text strong>Hot</Text>
          <Title>$500</Title>
          <Text type="secondary">Bicycle 1</Text>
          <div>
            <Select
              defaultValue="black"
              style={{ width: 120 }}
              options={[
                { value: 'black', label: 'Black' },
                { value: 'white', label: 'White' },
              ]}
            />
          </div>
          <div>
            <Select
              defaultValue="small"
              style={{ width: 120 }}
              options={[
                { value: 'small', label: 'Small' },
                { value: 'large', label: 'Large' },
              ]}
            />
          </div>
          <Text strong>
            Lenox electric bike 28"36V8Ah//250w 28'' Aluminum 6061 frame250w
            rear motor
          </Text>
          <Button
            style={{ width: '100%' }}
            type="primary"
            onClick={() => {
              //navigate('/product');
            }}
          >
            Buy
          </Button>
        </Space>
      </div>
    </Layout>
  );
};

export default Detail;
