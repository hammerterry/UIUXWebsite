import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HomeOutlined, ProductOutlined } from '@ant-design/icons';
import {
  Layout,
  Image,
  Button,
  Typography,
  Space,
  Select,
  message,
  Breadcrumb,
} from 'antd';
import { itemList } from '../Product/type';

const { Text, Title } = Typography;

const Detail: React.FC = () => {
  const navigate = useNavigate();
  const [bigImageIndex, setBigImageIndex] = useState(0);
  const location = useLocation();
  const { id } = location.state;
  const [messageApi, contextHolder] = message.useMessage();

  console.log('id', id);

  const handleImageClick = (imageIndex: number) => {
    console.log('handle Image Click', imageIndex);
    setBigImageIndex(imageIndex);
  };
  return (
    <Layout style={{ paddingTop: '5px' }}>
      {contextHolder}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Breadcrumb
          items={[
            {
              href: '/welcome',
              title: <HomeOutlined />,
            },
            {
              href: '/product',
              title: (
                <>
                  <ProductOutlined />
                  <span>Product</span>
                </>
              ),
            },
            {
              title: 'Item',
            },
          ]}
        />
        <div>
          <Button
            type="primary"
            onClick={() => {
              navigate('/product');
            }}
          >
            Back
          </Button>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginLeft: '50px', width: '500px' }}>
          <div style={{ marginLeft: '30px' }}>
            <Image
              preview={false}
              width={400}
              height={400}
              src={itemList[id].image[bigImageIndex]}
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <Image
              preview={false}
              width={150}
              height={150}
              src={itemList[id].image[0]}
              onClick={() => handleImageClick(0)}
            />
            <Image
              preview={false}
              width={150}
              height={150}
              src={itemList[id].image[1]}
              onClick={() => handleImageClick(1)}
            />
            <Image
              preview={false}
              width={150}
              height={150}
              src={itemList[id].image[2]}
              onClick={() => handleImageClick(2)}
            />
          </div>
        </div>
        <Space direction="vertical" style={{ width: '500px' }}>
          <Title level={3}>{itemList[id].name}</Title>
          {itemList[id].isHot && (
            <Text style={{ backgroundColor: '#FA8072' }} strong>
              Hot
            </Text>
          )}
          <Title>{`$${itemList[id].price}`}</Title>
          <Text type="secondary">{itemList[id].category}</Text>
          <div>
            <Text>Color</Text>
            <Select
              defaultValue="black"
              style={{ width: '100%' }}
              options={[
                { value: 'black', label: 'Black' },
                { value: 'white', label: 'White' },
              ]}
            />
          </div>
          <div>
            <Text>Size</Text>
            <Select
              defaultValue="small"
              style={{ width: '100%' }}
              options={[
                { value: 'small', label: 'Small' },
                { value: 'large', label: 'Large' },
              ]}
            />
          </div>
          <Text strong>{itemList[id].descriptions}</Text>

          <Button
            style={{ width: '100%' }}
            type="primary"
            onClick={() => {
              messageApi.info('Purchase successful!');
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
