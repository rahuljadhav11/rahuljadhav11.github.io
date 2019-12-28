import React, { Fragment } from "react";
import { Avatar, Tooltip } from "antd";
import { titleize } from "../../utils/helper";
import "./card-info.scss";

const imageList = technologies => (
  <ul className="technology-images">
    {
      technologies.split(", ").map((technology) => (
        <li key={technology}>
          <Tooltip placement="top" title={titleize(technology)}>
            <Avatar src={require(`../../assets/images/${technology}.svg`)} shape="square" alt={technology} />
          </Tooltip>
        </li>
      ))
    }
  </ul>
)

const CardInfo = ({ title, subTitle, description, ...props }) => {
  const { technologies, className } = props;
  return (
    <Fragment>
      <div key={title} className={`card-info ${className}`}>
        { title && <div className="title">{title}</div> }
        { subTitle && <div className="sub-title">{subTitle}</div> }
        { description && <p align="justify" className="description">{description}</p> }
        { technologies && imageList(technologies) }
      </div>
    </Fragment>
  );
};

export default CardInfo;
