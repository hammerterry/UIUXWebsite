import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import type { MenuProps } from 'antd';
import styles from './index.module.scss';

const { Header } = Layout;

const NavigationHeader: React.FC = () => {
  const [current, setCurrent] = useState('');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div className="logo">
        <Link to="/welcome">Logo</Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        //defaultSelectedKeys={['1']}
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        selectedKeys={[current]}
      >
        <Menu.Item key="1" onClick={onClick}>
          <Link to="/product">Product</Link>
        </Menu.Item>
        <Menu.Item key="2" onClick={onClick}>
          <Link to="/welcome">About</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavigationHeader;
