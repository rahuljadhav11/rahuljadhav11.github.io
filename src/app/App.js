import React from "react";
import { Layout, Col } from "antd";
import UserProfile from "../components/UserProfile";
import UserDetails from "../components/UserDetails";
import { user } from "../user";
import "antd/dist/antd.css";
import "../css/global/app.scss";

const { Content } = Layout;

const App = () => (
  <Layout>
    <Content>
      <Col xxl={7} xl={7} lg={7} md={24} sm={24} xs={24}>
        <UserProfile userProfile={user.profile} />
      </Col>
      <Col xxl={17} xl={17} lg={17} md={24} sm={24} xs={24}>
        <UserDetails userDetails={user.details} />
      </Col>
    </Content>
  </Layout>
);

export default App;
