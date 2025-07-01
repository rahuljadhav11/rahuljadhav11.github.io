import React from "react";
import { Card, Avatar, Badge, Row, Tooltip } from "antd";
import { titleize } from "../../utils/helper";
import "./image.scss";

const Image = ({ title, tag, shape, size }) => (
  <Card key={title} className="image" bordered={false}>
    {tag ? (
      <Tooltip title={`Experience in ${titleize(title)} is ${tag} years.`}>
        <Badge count={tag} style={{ backgroundColor: "#fa8c16" }}>
          <Avatar
            className="tech"
            size={size}
            shape={shape}
            src={require(`../../assets/images/${title}.svg`)}
          />
        </Badge>
      </Tooltip>
    ) : (
      <Badge count={tag} style={{ backgroundColor: "#fa8c16" }}>
        <Avatar
          className="tech"
          size={size}
          shape={shape}
          src={require(`../../assets/images/${title}.svg`)}
        />
      </Badge>
    )}
    <Row className="image-title">{titleize(title)}</Row>
  </Card>
);

export default Image;
