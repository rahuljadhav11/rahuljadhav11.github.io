import React from "react";
import CardInfo from "../CardInfo";
import { Timeline, Icon } from "antd";

const { Item } = Timeline;

const Experience = ({ experience }) => (
  <Timeline mode="alternate" className="experience">
    {experience.map((item, index) => {
      const dotType = index === 0 ? "clock-circle" : "check-circle";
      const color = index === 0 ? "blue" : "green";

      return (
        <Item
          key={`${item.designation} - ${item.company}`}
          dot={<Icon type={dotType} style={{ fontSize: "16px" }} />}
          color={color}
        >
          <CardInfo
            className="experience"
            title={`${item.designation} - ${item.company}`}
            subTitle={item.period}
            description={item.description}
          />
        </Item>
      );
    })}
  </Timeline>
);

export default Experience;
