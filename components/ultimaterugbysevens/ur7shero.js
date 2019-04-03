import Link from "next/link";
import React from "react";
import { Row, Col, Container, Image, Jumbotron } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Ur7sHeroImg = () => (
  //   <Col lg={12} md={12} sm={12}>
  //     <Image className="tileLeft" src="../static/ur7sHero.jpg" fluid />
  //   </Col>
  <Container>
    <Row>
      <Jumbotron fluid>
        <Image src="../static/ur7sHero.jpg" />
      </Jumbotron>
    </Row>
  </Container>
);

export default Ur7sHeroImg;
