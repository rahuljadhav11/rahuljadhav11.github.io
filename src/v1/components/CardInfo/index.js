import React, { Fragment } from "react";
import { Card, Avatar, Tooltip } from "antd";
import { titleize } from "../../v1/app/utils/helper";
import "./card-info.scss";

const imageList = technologies => (
  <ul className="technology-images">
    {technologies.split(", ").map(technology => (
      <li key={technology}>
        <Tooltip placement="top" title={titleize(technology)}>
          <Avatar
            src={require(`../../assets/images/${technology}.svg`)}
            shape="square"
            alt={technology}
          />
        </Tooltip>
      </li>
    ))}
  </ul>
);

const list = responsibilities => (
  <div className="list-responsibilities">
    <div className="header">Roles and Responsibilities</div>
    <ul className="responsibilities">
      {responsibilities.map(responsibility => (
        <li key={responsibility}>
          <p align="left">{responsibility}</p>
        </li>
      ))}
    </ul>
  </div>
);

const CardInfo = ({ title, subTitle, description, ...props }) => {
  const { technologies, className, responsibilities } = props;
  return (
    <Fragment>
      <Card
        key={title}
        className={`card-info ${className}`}
        bordered={false}
      >
        {title && <div className="title">{title}</div>}
        {subTitle && <div className="sub-title">{subTitle}</div>}
        {description && (
          <p align="justify" className="description">
            {description}
          </p>
        )}
        {responsibilities && list(responsibilities)}
        {technologies && imageList(technologies)}
      </Card>
    </Fragment>
  );
};

export default CardInfo;
