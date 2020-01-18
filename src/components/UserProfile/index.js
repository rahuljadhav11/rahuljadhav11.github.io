import React from "react";
import { Card, Avatar, Tooltip, Row, Col } from "antd";
import { titleize } from "../../utils/helper";
import "./user-profile.scss";

const actions = userActions =>
  userActions.map(action => (
    <Tooltip placement="top" title={titleize(action.name)}>
      <a href={action.link} rel="noopener noreferrer" target="_blank">
        <Avatar
          src={require(`../../assets/images/${action.name}.svg`)}
          key={action.name}
          shape="square"
        />
      </a>
    </Tooltip>
  ));

const hobbies = () => (
  <Row className="hobbies" gutter={16}>
    <Col span={5}>
      <Avatar
        className="avatar"
        src={require(`../../assets/images/hackerrank.svg`)}
        shape="square"
        alt="blender"
        size={64}
      />
    </Col>
    <Col span={5}>
      <Avatar
        className="avatar"
        src={require(`../../assets/images/ruby.svg`)}
        shape="square"
        alt="blender"
        size={64}
      />
    </Col>
    <Col span={5}>
      <Avatar
        className="avatar"
        src={require(`../../assets/images/git.svg`)}
        shape="square"
        alt="blender"
        size={64}
      />
    </Col>
    <Col span={5}>
      <Avatar
        className="avatar"
        src={require(`../../assets/images/jira.svg`)}
        shape="square"
        alt="blender"
        size={64}
      />
    </Col>
    <Col span={5}>
      <Avatar
        className="avatar"
        src={require(`../../assets/images/haml.svg`)}
        shape="square"
        alt="blender"
        size={64}
      />
    </Col>
  </Row>
);

const UserProfile = ({ userProfile }) => (
  <Card
    key="user-profile"
    className="user-profile-card"
    actions={actions(userProfile.actions)}
  >
    <Row>
      <Avatar
        icon="user"
        src={require("../../assets/images/profile.jpg")}
        shape="square"
        size={160}
        className="user-profile-image"
        alt="user-profile"
      />
    </Row>
    <Row className="user-name">{userProfile.name}</Row>
    <Row className="user-info">Contact No. - {userProfile.contact_number}</Row>
    <Row className="user-info">Email - {userProfile.email}</Row>
    <Row>
      <p align="justify" className="user-objective">
        {userProfile.about_me}
      </p>
    </Row>
  </Card>
);

export default UserProfile;
