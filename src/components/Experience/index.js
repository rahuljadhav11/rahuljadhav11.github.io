import React from "react";
import CardInfo from "../CardInfo";
import { Timeline, Icon } from "antd";
import "./experience.scss";

const { Item } = Timeline;

const timelineItems = companyDetails =>
  companyDetails.map((item, index) => {
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
          title={`${item.designation} @ ${item.company}`}
          subTitle={item.period}
          description={item.description}
          responsibilities={item.responsibilities}
        />
      </Item>
    );
  });

const companyLogo = logo => (
  <Item
    key={logo}
    dot={
      <img
        className="company-logo"
        src={require(`../../assets/images/${logo}`)}
        alt=""
      />
    }
  >
    <br />
    <br />
  </Item>
);

const Experience = ({ experience }) => (
  <Timeline mode="alternate" className="experience">
    {experience.map((company, index) => {
      const items = timelineItems(company.details);
      items.unshift(companyLogo(company.logo));
      console.log(items);
      return items;
    })}
  </Timeline>
);

export default Experience;
