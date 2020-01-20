import React, { Fragment } from "react";
import CardInfo from "../CardInfo";
import { Row, Col } from "antd";

const Projects = ({ projects }) => {
  const formattedData = [];

  for (let index = 0; index < projects.length; index += 2) {
    formattedData.push(
      <Row gutter={16} key={`project-${index}`}>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <CardInfo
            className="projects"
            title={projects[index].title}
            subTitle={projects[index].sub_title}
            description={projects[index].description}
            technologies={projects[index].technologies}
          />
        </Col>
        {projects[index + 1] && (
          <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
            <CardInfo
              className="projects"
              title={projects[index + 1].title}
              subTitle={projects[index + 1].sub_title}
              description={projects[index + 1].description}
              technologies={projects[index + 1].technologies}
            />
          </Col>
        )}
      </Row>
    );
    formattedData.push(<br key={`project-br-${index}`} />);
  }

  return <Fragment>{formattedData}</Fragment>;
};

export default Projects;
