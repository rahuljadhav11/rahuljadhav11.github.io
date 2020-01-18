import React from "react";
import CardInfo from "../CardInfo";
import { Timeline, Icon } from "antd";

const { Item } = Timeline;

const Education = ({ education }) => (
  <Timeline mode="alternate">
    {education.map(item => (
      <Item
        key={item.degree}
        dot={<Icon type="check-circle" style={{ fontSize: "16px" }} />}
        color="green"
      >
        <CardInfo
          className="education"
          title={`${item.degree} - ${item.institute}`}
          subTitle={item.period}
          description={item.marks}
        />
      </Item>
    ))}
  </Timeline>
);

export default Education;
