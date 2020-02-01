import React from "react";
import CardInfo from "../CardInfo";
import { Card, Row, Col } from "antd";
import "./experience.scss";

const companyInfo = companyDetails => (
  <CardInfo
    className="experience"
    description={companyDetails.description}
    responsibilities={companyDetails.responsibilities}
  />
);

const companyLogo = companyDetails => (
  <Card className="company-info-wrapper" bordered={false}>
    <div className="designation">{companyDetails.designation}</div>
    <div className="info">{companyDetails.period}</div>
    {companyDetails.logo && (
      <a
        href={companyDetails.companyLink}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="company-logo"
          src={require(`../../assets/images/${companyDetails.logo}.svg`)}
          alt=""
        />
      </a>
    )}
  </Card>
);

const items = companyDetails => (
  <Card
    key={`${companyDetails.designation} @ ${companyDetails.company}`}
    className="details"
  >
    <Row
      key={`${companyDetails.designation} @ ${companyDetails.company}`}
      type="flex"
      align="middle"
    >
      <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
        {companyLogo(companyDetails)}
      </Col>
      <Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
        {companyInfo(companyDetails)}
      </Col>
    </Row>
  </Card>
);

const Experience = ({ experience }) => (
  <div className="experience">{experience.map(company => items(company))}</div>
);

export default Experience;
