import React, { useState } from 'react';
import { Row, Col, Button, Card, Layout, Typography } from 'antd';

import { FaSearch, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import NavigationHeader from '../../component/NavigationHeader';

const { Meta } = Card;
const { Content, Footer } = Layout;
const { Title } = Typography;

const Welcome: React.FC = () => {
  return (
    <div className="title">
      <Title>Welcome</Title>
      <Title level={5}>arngen</Title>
      <Button>Shopping</Button>
    </div>
  );
};

export default Welcome;
