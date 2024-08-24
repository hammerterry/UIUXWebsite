import React, { useState } from 'react';
import { Layout, Menu, Image, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import styles from './index.module.scss';
import { MdLanguage } from 'react-icons/md';
import Logo from '../../assets/logo.png';

const { Header } = Layout;

const NavigationHeader: React.FC = () => {
  const [current, setCurrent] = useState('');
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Header
      style={{
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div className="logo">
        <Image
          preview={false}
          width={50}
          height={50}
          src={Logo}
          onClick={() => {
            setCurrent('');
            navigate('/welcome');
          }}
        />
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        //defaultSelectedKeys={['1']}
        style={{
          width: 256,
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
        <Menu.Item key="3">
          <Button>
            <MdLanguage />
          </Button>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavigationHeader;
