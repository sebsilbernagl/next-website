import Link from "next/link";
import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const AboutTileImg = () => (
          <Col lg={6} md={6} sm={12} className="no-paddding-margin">
            <Image className="tileLeft" src="../static/capeTown.jpg" fluid />
          </Col>
);

export default AboutTileImg;