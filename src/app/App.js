import React from 'react';
import { Layout, Col } from "antd";
import UserProfile from "../components/UserProfile";
import "antd/dist/antd.css";
import '../css/global/app.scss';

const { Content } = Layout;

const App = () => (
  <Layout>
    <Content>
      <Col span={8}><UserProfile /></Col>
    </Content>
  </Layout>
);

export default App;
