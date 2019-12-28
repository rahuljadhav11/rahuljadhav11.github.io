import React, { Fragment } from "react";
import CardInfo from "../CardInfo";
import { Row, Col } from "antd";

const UserDetails = () => (
  <Fragment>
    <Row gutter={16}>
      <Col span={12}>
        <CardInfo
          title="MINT-Sports - Current Project"
          subTitle="July 2019"
          description="The project is focused on sales and prs team of star sports to handle their ad-sales business for sport channels. It helps them to move from manual to automated processing. It also helps stakeholders to get the entire visibility of their available and booked inventory in various views. It sets specific workflow for sales-advertisement department."
          technologies="rails, ruby, react, redux, psql, jira"
        />
      </Col>
      <Col span={12}>
        <CardInfo
          title="MINT-Entertainment"
          subTitle="July 2018 - June 2019"
          description="The project is focused on sales team of star tv to handle their ad-sales business for entertainment channels. It helps them to move from manual to automated processing. It also helps stakeholders to get the entire visibility of their inventory by products. Idea is same as MINT-sports project but in different areas."
          technologies="rails, ruby, react, redux, psql, jira"
        />
      </Col>
    </Row>
    <br />
    <Row gutter={16}>
      <Col span={12}>
        <CardInfo
          title="Code-curiosity - Internship project"
          subTitle="Jan 2018 - Jun 2018"
          description="Open source project to motivate and reward open source contributors based on quality of commits and activities. Using github apis to get required data of users commits and activities, applying scoring algorithm on them to give user a motivational reward."
          technologies="rails, ruby, javascript, jquery, haml, mongodb"
        />
      </Col>
      <Col span={12}>
        <CardInfo
          title="Image processing usign Hadoop"
          subTitle="Oct 2017 - March 2018"
          description="Project to process and analyse big data (images) using Hadoop. Creating sets of images and comparing them on single-node and multi-node clusters. Processing image data like iris and fingerprint patterns in distributed manner and comparing sequential results with distributed results."
          technologies="hadoop, java"
        />
      </Col>
    </Row>
    <br />
    <Row gutter={16}>
      <Col span={12}>
        <CardInfo
          title="Jaya algorithm"
          subTitle="Aug 2017 – Nov 2017"
          description="Jaya algorithm is population based heuristic algorithm. It is a algorithm-specific parameter-less optimisation algorithm which has many useful applications in research field. I implemented this algorithm in python."
          technologies="python"
        />
      </Col>
      <Col span={12}>
        <CardInfo
          title="Minutes of Meetings"
          subTitle="Jan 2017 – Apr 2017"
          description="It is web based project. It is a platform to take online meetings and keep each meeting's record in user friendly manner. In this admin can create meeting, take attendance of attendees, assign tasks to members, make timeline for each task, maintain online submissions of tasks."
          technologies="java, javascript, mysql"
        />
      </Col>
    </Row>
    <br />
    <Row gutter={16}>
      <Col span={12}>
        <CardInfo
          title="Blender Animation"
          subTitle="Aug 2016 – Nov 2016"
          description="Blender animation of TLBO algorithm. It is a animated way of explaining and easy to understand a difficult algorithm."
          technologies="blender"
        />
      </Col>
    </Row>
  </Fragment>
);

export default UserDetails;
