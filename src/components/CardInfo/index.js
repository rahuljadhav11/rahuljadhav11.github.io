import React, { Fragment } from "react";
import { Avatar } from "antd";
import "./card-info.scss";

const CardInfo = ({ title, subTitle, description, ...props }) => {
  const { technologies, className } = props;
  return (
    <Fragment>
      <div key={title} className={`card-info ${className}`}>
        { title && <div className="title">{title}</div> }
        { subTitle && <div className="sub-title">{subTitle}</div> }
        { description && <p align="justify" className="description">{description}</p> }
        { technologies && (
          <ul className="technology-images">
            {
              technologies.split(", ").map((technology) => (
                <li key={technology}>
                  <Avatar src={require(`../../assets/images/${technology}.svg`)} shape="square" alt={technology} />
                </li>
              ))
            }
          </ul>)
        }
      </div>
    </Fragment>
  );
};

export default CardInfo;
