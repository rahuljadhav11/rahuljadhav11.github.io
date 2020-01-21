import React, { useState, useEffect } from "react";
import CardInfo from "../CardInfo";
import { Timeline, Icon } from "antd";

const { Item } = Timeline;

const Education = ({ education }) => {
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
    <Timeline mode={timelineMode()}>
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
};

export default Education;
