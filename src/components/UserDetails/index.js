import React, { useState } from "react";
import { Card, Empty } from "antd";
import Projects from "../Projects";
import Experience from "../Experience";
import Education from "../Education";
import "./user-details.scss";

const tabs = userDetails => (
  Object.keys(userDetails).map(key => ({ key: key, tab: key.toUpperCase() }))
);

const componentToLoad = (userDetails, activeTab) => {
  switch (activeTab) {
    case "experience":
      return <Experience experience={userDetails["experience"]} />;
    case "projects":
      return <Projects projects={userDetails["projects"]} />;
    case "education":
      return <Education education={userDetails["education"]} />;
    default:
      return <Empty />;
  }
};

const UserDetails = ({ userDetails }) => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <Card
      key="user-details"
      className="user-details"
      tabList={tabs(userDetails)}
      activeTabKey={activeTab}
      onTabChange={key => setActiveTab(key)}
    >
      {componentToLoad(userDetails, activeTab)}
    </Card>
  )
};

export default UserDetails;
