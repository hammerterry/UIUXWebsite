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
  Radio,
  Input,
  RadioChangeEvent,
} from 'antd';
import { FaSearch, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import { SearchOutlined } from '@ant-design/icons';

import Item1 from '../../assets/item1.jpg';

import { itemList } from './type';

const { Meta } = Card;
const { Sider } = Layout;

const Product: React.FC = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemlist, setItemList] = useState(itemList);
  const navigate = useNavigate();

  const handleSearch = () => {
    // Perform search logic here
    console.log('Searching for:', searchTerm);
    if (searchTerm !== '') {
      setItemList(itemList.filter((item) => item.name === searchTerm));
    } else {
      setItemList(itemList);
    }
  };

  const handlePriceRangeChange = (values: [number, number]) => {
    console.log('price values', values);
    setPriceRange(values);

    setItemList(
      itemList.filter(
        (item) => item.price > values[0] && item.price < values[1],
      ),
    );
  };

  const handleCategoryChange = (categories: string[]) => {
    console.log('categories values', categories);
    setSelectedCategories(categories);

    if (categories.length > 0) {
      setItemList(
        itemList.filter((item) => categories.includes(item.category)),
      );
    } else {
      setItemList(itemList);
    }
  };

  const handleSortingChange = (event: RadioChangeEvent) => {
    console.log('sorting values', event.target.value);
  };

  return (
    // <Flex justify="space-between">
    <Layout style={{ paddingTop: '5px' }}>
      <Sider width={300} style={{}}>
        <Menu
          mode="vertical"
          style={{
            width: 300,
            height: '100%',
            padding: '24px',
            border: 'solid',
            borderColor: '#000000',
            borderWidth: 'thin',
          }}
        >
          <Menu.Item style={{ height: '200px' }}>
            <h3>Price Range</h3>
            <Slider
              range
              min={0}
              max={100000}
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
              options={['Bike', 'Motor', 'Car', 'Lawnmower', 'Binoculars']}
              value={selectedCategories}
              onChange={handleCategoryChange}
            />
          </Menu.Item>
        </Menu>
      </Sider>

      <div style={{ paddingLeft: '10px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Row gutter={16}>
            <Col>
              <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '300px' }}
              />
            </Col>
            <Col>
              <Button type="primary" onClick={handleSearch}>
                <SearchOutlined />
                Search
              </Button>
            </Col>
          </Row>

          <Radio.Group
            defaultValue="new"
            buttonStyle="solid"
            size="small"
            onChange={handleSortingChange}
          >
            <Radio.Button value="new">New</Radio.Button>
            <Radio.Button value="ascending">Price ascending</Radio.Button>
            <Radio.Button value="decending">Price decending</Radio.Button>
            <Radio.Button value="rating">Rating</Radio.Button>
          </Radio.Group>
        </div>

        <Row gutter={[16, 16]} style={{ paddingTop: '10px' }}>
          {itemlist.map((item) => (
            <Col xs={24} sm={24} md={12} lg={8} key={item.id}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="item" src={item.image[0]} />}
                onClick={() => navigate('/detail', { state: { id: item.id } })}
              >
                <Meta title={item.name} description={`$${item.price}`} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Layout>
    // </Flex>
  );
};

export default Product;
