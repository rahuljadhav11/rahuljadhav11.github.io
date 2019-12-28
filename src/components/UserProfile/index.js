import React from "react";
import { Card, Avatar, Tooltip } from "antd";
import "./user-profile.scss";

const UserProfile = () => (
  <Card
    key="user-profile"
    className="user-profile-card"
    actions={[
      (
        <Tooltip placement="top" title="Linkedin">
          <a href="https://www.linkedin.com/in/rahul-jadhav-922b0811a/" rel="noopener noreferrer" target="_blank">
            <Avatar src={require("../../assets/images/linkedin.svg")} key="linkedin" shape="square" />
          </a>
        </Tooltip>
      ),
      (
        <Tooltip placement="top" title="Github">
          <a href="https://github.com/pain11" rel="noopener noreferrer" target="_blank">
            <Avatar src={require("../../assets/images/github.svg")} key="github" shape="square" />,
          </a>
        </Tooltip>
      ),
      (
        <Tooltip placement="top" title="Antd">
          <Avatar src={require("../../assets/images/antd.svg")} key="antd" shape="square" />
        </Tooltip>
      )
    ]}
  >
    <Avatar
      icon="user"
      src={require("../../assets/images/profile.jpg")}
      shape="square"
      size={160}
      className="user-profile-image"
      alt="user-profile"
    />
    <div className="user-name">Rahul Jadhav</div>
    <div className="user-info">Contact No. - 9404378965</div>
    <div className="user-info">Email - rahul.rj9421@gmail.com</div>
    <p align="justify" className="user-objective">
      Ruby on Rails and ReactJs developer, who likes work on new challenging technology problems.
      I am interested in data structures, algorithms and OOP programming.
      I am seeking interesting opportunity to solve real life problems.
    </p>
  </Card>
);

export default UserProfile;
