import React, { useState } from 'react';
import { Layout, Image, Button, Typography } from 'antd';
import { itemList } from '../Product/type';

const { Text } = Typography;

const Detail: React.FC = () => {
  return (
    <Layout style={{ paddingTop: '5px' }}>
      <div>
        <Button type="primary">Back</Button>
      </div>
      <div>
        <Image
          preview={false}
          width={300}
          height={300}
          src={itemList[0].image}
          onClick={() => {}}
        />
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
