import React from "react";
import { Row, Col } from "antd";
import Image from "../Image";
import { titleize } from "../../utils/helper";
import "./skill.scss";

const renderSkillImages = skills => (
    <Row className="technology-images" gutter={16}>
    {
      skills.map((skill, index) => (
        <Col key={skill.name} xxl={4} xl={6} lg={6} md={8} sm={12} xs={24}>
          <Image
            title={skill.name}
            tag={skill.experience}
            shape="square"
            size={64}
          />
        </Col>
      ))
    }
  </Row>
);

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
