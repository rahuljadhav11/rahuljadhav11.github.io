import React, { useState } from "react";
import Projects from "../Projects";
import { Card, Empty } from "antd";
import "./user-details.scss";

const tabs = [
  {
    key: "projects",
    tab: "PROJECTS"
  },
  {
    key: "education",
    tab: "EDUCATION"
  },
];

const componentToLoad = (key) => {
  switch (key) {
    case "projects":
      return <Projects />;
    default:
      return <Empty />;
  }
};

const UserDetails = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <Card
      key="user-details"
      className="user-details"
      tabList={tabs}
      activeTabKey={activeTab}
      onTabChange={key => setActiveTab(key)}
    >
      {componentToLoad(activeTab)}
    </Card>
  )
};

export default UserDetails;
