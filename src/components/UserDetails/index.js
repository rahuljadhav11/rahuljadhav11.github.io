import React, { useState } from "react";
import { Card, Empty, Icon } from "antd";
import Projects from "../Projects";
import Experience from "../Experience";
import Education from "../Education";
import Skill from "../Skill";
import "./user-details.scss";

const iconForHeader = header => {
  switch (header) {
    case "experience":
      return <Icon type="hourglass" theme="twoTone" />;
    case "projects":
      return <Icon type="project" theme="twoTone" />;
    case "education":
      return <Icon type="book" theme="twoTone" />;
    case "skills":
      return <Icon type="code" theme="twoTone" />;
    default:
      return "";
  }
};

const tabs = userDetails =>
  Object.keys(userDetails).map(key => {
    const tab = (
      <span>
        {iconForHeader(key)}
        {key.toUpperCase()}
      </span>
    );

    return { key: key, tab: tab };
  });

const componentToLoad = (userDetails, activeTab) => {
  switch (activeTab) {
    case "experience":
      return <Experience experience={userDetails["experience"]} />;
    case "projects":
      return <Projects projects={userDetails["projects"]} />;
    case "education":
      return <Education education={userDetails["education"]} />;
    case "skills":
      return <Skill skills={userDetails["skills"]} />;
    default:
      return <Empty />;
  }
};

const UserDetails = ({ userDetails }) => {
  const [activeTab, setActiveTab] = useState("skills");

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
  );
};

export default UserDetails;
