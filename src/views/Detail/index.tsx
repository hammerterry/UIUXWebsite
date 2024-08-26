import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Image, Button, Typography } from 'antd';
import { itemList } from '../Product/type';

const { Text } = Typography;

const Detail: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{ paddingTop: '5px' }}>
      <div>
        <Button type="primary" onClick={() => { navigate('/product')}}>Back</Button>
      </div>
      <div>
        <div>
        <Image
          preview={false}
          width={300}
          height={300}
          src={itemList[0].image}
        />
        </div>
        <div>
          <Text strong>Bicycle 1</Text>
          <Text strong>Bicycle 1</Text>
          <Text strong>Bicycle 1</Text>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
