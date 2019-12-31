import React from "react";
import CardInfo from "../CardInfo";
import { Timeline } from "antd";

const { Item } = Timeline;

const Education = ({ education }) => (
  <Timeline mode="alternate" className="experience">
    <Item color="green">
      <CardInfo
        title={`${education[0].institute} - ${education[0].degree}`}
        subTitle={education[0].period}
        description={education[0].marks}
      />
    </Item>
    <Item color="green">
      <CardInfo
        title={`${education[1].institute} - ${education[1].degree}`}
        subTitle={education[1].period}
        description={education[1].marks}
      />
    </Item>
    <Item color="green">
      <CardInfo
        title={`${education[2].institute} - ${education[2].degree}`}
        subTitle={education[2].period}
        description={education[2].marks}
      />
    </Item>
  </Timeline>
);

export default Education;
