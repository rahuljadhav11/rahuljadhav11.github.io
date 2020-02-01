import React from "react";
import CardInfo from "../CardInfo";
import { Card, Row, Col } from "antd";
import "./education.scss";

const marksInfo = details => (
  <CardInfo
    className="education"
    title={details.institute}
    description={details.marks}
  />
);

const degreeInfo = details => (
  <Card className="wrapper" bordered={false}>
    <div className="degreeAbbreviation">{details.degreeAbbreviation}</div>
    <div className="degree">({details.degree})</div>
  </Card>
);

const items = details => (
  <Card key={details.institute} className="details">
    <Row key={details.institute} type="flex" align="middle">
      <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
        {degreeInfo(details)}
      </Col>
      <Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
        {marksInfo(details)}
      </Col>
    </Row>
  </Card>
);

const Education = ({ education }) => (
  <div className="education">{education.map(item => items(item))}</div>
);

export default Education;
