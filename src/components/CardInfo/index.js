import React, { Fragment } from "react";
import { Row, Col, Avatar } from "antd";
import "./card-info.scss";

const CardInfo = ({ title, subTitle, description, ...props }) => {
  const { technologies, className } = props;
  return (
    <Fragment>
      <div key={title} className={`card-info ${className}`}>
        { title && <div className="title border-bottom">{title}</div> }
        { subTitle && <div className="sub-title">{subTitle}</div> }
        { description && <p align="justify" className="description">{description}</p> }
        { technologies && (
          <Row>
            {
              technologies.split(", ").map((technology) => (
                <Col key={technology}>
                  <Avatar src={require(`../../assets/images/${technology}.svg`)} shape="square" alt={technology}/>
                </Col>
              ))
            }
          </Row>)
        }
      </div>
    </Fragment>
  );
};

export default CardInfo;
