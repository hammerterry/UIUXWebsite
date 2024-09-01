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
  Space,
} from 'antd';
import { FaSearch, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import { SearchOutlined } from '@ant-design/icons';

import Item1 from '../../assets/item1.jpg';

import { itemList } from './type';

const { Meta } = Card;
const { Sider, Content } = Layout;

const Product: React.FC = () => {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'Bike',
    'Motor',
    'Car',
    'Lawnmower',
    'Binoculars',
  ]);
  const [selectedSorting, setSelectedSorting] = useState<string>('new');
  const [searchTerm, setSearchTerm] = useState('');
  const [itemlist, setItemList] = useState(itemList);
  const navigate = useNavigate();

  const handleSearch = () => {
    // Perform search logic here
    console.log('Searching for:', searchTerm);
    if (searchTerm !== '') {
      setItemList(itemList.filter((item) => item.name === searchTerm));
      setPriceRange([0, 100000]);
      setSelectedCategories([
        'Bike',
        'Motor',
        'Car',
        'Lawnmower',
        'Binoculars',
      ]);
      setSelectedSorting('new');
    } else {
      setItemList(itemList);
    }
  };

  const handlePriceRangeChange = (values: [number, number]) => {
    console.log('price values', values);
    setPriceRange(values);
    setSelectedSorting('new');
    setItemList(
      itemList
        .filter((item) => item.price > values[0] && item.price < values[1])
        .filter((item) => selectedCategories.includes(item.category)),
    );
  };

  const handleCategoryChange = (categories: string[]) => {
    console.log('categories values', categories);
    setSelectedCategories(categories);
    setSelectedSorting('new');
    //if (categories.length > 0) {
    setItemList(
      itemList
        .filter((item) => categories.includes(item.category))
        .filter(
          (item) => item.price > priceRange[0] && item.price < priceRange[1],
        ),
    );
    //} else {
    // setItemList(itemList);
    // }
  };

  const handleSortingChange = (event: RadioChangeEvent) => {
    setSelectedSorting(event.target.value);
    var byPrice = itemlist.slice(0);
    switch (event.target.value) {
      case 'new':
        setItemList(itemlist);
        break;
      case 'ascending':
        setItemList(
          byPrice.sort(function (a, b) {
            return a.price - b.price;
          }),
        );
        break;
      case 'decending':
        setItemList(
          byPrice.sort(function (a, b) {
            return b.price - a.price;
          }),
        );
        break;
      case 'rating':
        setItemList(itemlist);
        break;
    }
  };

  return (
    <Layout
      style={{
        paddingTop: '5px',
        backgroundColor: '#FFFFFF',
        height: '90vh',
      }}
    >
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

      <Content style={{ paddingLeft: '10px' }}>
        {/* <Space direction="vertical" style={{ paddingLeft: '10px' }}> */}
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
                placeholder="Item name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '300px', borderColor: '#000000' }}
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
            value={selectedSorting}
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
        {/* </Space> */}
      </Content>
    </Layout>
  );
};

export default Product;
