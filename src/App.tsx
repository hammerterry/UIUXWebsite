import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import NavigationHeader from './component/NavigationHeader';
import Product from './views/Product';
import Detail from './views/Detail';
import Welcome from './views/Welcome';
import { Layout } from 'antd';
const { Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout className="layout">
        <NavigationHeader />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome/" element={<Welcome />} />
          <Route path="/product" element={<Product />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
