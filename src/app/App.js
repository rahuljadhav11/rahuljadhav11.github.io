import React from 'react';
import { Layout, Col } from "antd";
import UserProfile from "../components/UserProfile";
import UserDetails from "../components/UserDetails";
import { user } from "../user";
import "antd/dist/antd.css";
import '../css/global/app.scss';

const { Content } = Layout;

const App = () => (
  <Layout>
    <Content>
      <Col span={8}><UserProfile userProfile={user.profile} /></Col>
      <Col span={16}><UserDetails userDetails={user.details} /></Col>
    </Content>
  </Layout>
);

export default App;
