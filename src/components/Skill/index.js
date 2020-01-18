import React from "react";
import { Row, Col } from "antd";
import Image from "../Image";
import { titleize, group } from "../../utils/helper";
import "./skill.scss";

const renderSkillImages = skills => {
  const colLength = 6;
  const itemCount = 24 / colLength;

  return group(skills, itemCount).map((skill, index) => (
    <div>
      <Row key={index} className="technology-images" gutter={16}>
        {skill.map(item => (
          <Col key={item.name} span={colLength}>
            <Image
              title={item.name}
              tag={item.experience}
              shape="square"
              size={64}
            />
          </Col>
        ))}
      </Row>
      <br />
    </div>
  ));
};
const Skill = ({ skills }) => {
  const formattedSkills = [];

  for (const key in skills) {
    formattedSkills.push(
      <div key={key} className="skills">
        <Row className="title">{titleize(key)}</Row>
        <br />
        {renderSkillImages(skills[key])}
      </div>
    );
  }

  return formattedSkills;
};

export default Skill;
