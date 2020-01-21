import React, { useState, useEffect } from "react";
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

const Experience = ({ experience }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSizeChange);
    // make sure to remove the listener
    // when the component is not mounted anymore
    return function cleanup() {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const timelineMode = () => {
    if (windowWidth <= 768) {
      return "left";
    }
    return "alternate";
  };

  return (
    <Timeline mode={timelineMode()} className="timeline-experience">
      {experience.map((company, index) => {
        const items = timelineItems(company.details);
        items.unshift(companyLogo(company.logo));

        return items;
      })}
    </Timeline>
  );
};

export default Experience;
