import React from "react";
import CardInfo from "../CardInfo";
import { Timeline, Icon } from "antd";

const { Item } = Timeline;

const Experience = ({ experience }) => (
  <Timeline mode="alternate" className="experience">
    <Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
      <CardInfo
        title={`${experience[0].company} - ${experience[0].designation}`}
        subTitle={experience[0].period}
        description={experience[0].description}
      />
    </Item>
    <Item color="green">
      <CardInfo
        title={`${experience[1].company} - ${experience[1].designation}`}
        subTitle={experience[1].period}
        description={experience[1].description}
      />
    </Item>
  </Timeline>
);

export default Experience;
