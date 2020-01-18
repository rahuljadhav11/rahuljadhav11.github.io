import React from "react";
import { Card, Avatar, Tooltip, Row } from "antd";
import "./user-profile.scss";

const UserProfile = ({ userProfile }) => (
  <Card
    key="user-profile"
    className="user-profile-card"
    actions={[
      <Tooltip placement="top" title="Linkedin">
        <a
          href="https://www.linkedin.com/in/rahul-jadhav-922b0811a/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Avatar
            src={require("../../assets/images/linkedin.svg")}
            key="linkedin"
            shape="square"
          />
        </a>
      </Tooltip>,
      <Tooltip placement="top" title="Github">
        <a
          href="https://github.com/pain11"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Avatar
            src={require("../../assets/images/github.svg")}
            key="github"
            shape="square"
          />
          ,
        </a>
      </Tooltip>,
      <Tooltip placement="top" title="Antd">
        <a
          href="https://www.hackerrank.com/rahulrj11?hr_r=1"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Avatar
            src={require("../../assets/images/hackerrank.svg")}
            key="antd"
            shape="square"
          />
        </a>
      </Tooltip>
    ]}
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
