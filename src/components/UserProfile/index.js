import React from "react";
import { Card, Avatar, Tooltip, Row, Col, Carousel } from "antd";
import { titleize, group } from "../../utils/helper";
import "./user-profile.scss";

const actions = userActions =>
  userActions.map(action => (
    <Tooltip placement="bottom" title={titleize(action.name)}>
      <a href={action.link} rel="noopener noreferrer" target="_blank">
        <Avatar
          src={require(`../../assets/images/${action.name}.svg`)}
          key={action.name}
          shape="square"
        />
      </a>
    </Tooltip>
  ));

const randerWhatILike = allHobbies => (
  <div className="hobbies">
    <div className="header">I Like</div>
    <Carousel autoplay dots={false}>
      {group(allHobbies, 3).map((hobbies, index) => (
        <Row key={index} gutter={16}>
          {hobbies.map(hobby => (
            <Col key={hobby} span={8}>
              <Avatar
                className="avatar"
                src={require(`../../assets/images/${hobby}.svg`)}
                shape="square"
                alt={hobby}
                size={48}
              />
              <div className="name">{titleize(hobby)}</div>
            </Col>
          ))}
        </Row>
      ))}
    </Carousel>
  </div>
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
    <Row className="user-info">Contact No - {userProfile.contact_number}</Row>
    <Row className="user-info">Email - {userProfile.email}</Row>
    <Row>
      <p align="justify" className="user-objective">
        {userProfile.about_me}
      </p>
    </Row>
    <Row>{randerWhatILike(userProfile.hobbies)}</Row>
  </Card>
);

export default UserProfile;
