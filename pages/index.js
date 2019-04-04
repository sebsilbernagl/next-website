import Head from "next/head";
import Link from "next/link";
import React from "react";
import ReactDOM from "react-dom";
import {
  Row,
  Col,
  Container,
  Jumbotron,
  Button,
  Image,
  Nav
} from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../style.scss";
import AboutTileImg from "../components/aboutTileImg";
import AboutSummary from "../components/aboutSummary";
import Ur7sDisc from "../components/ultimaterugbysevens/ur7sdisc";
import Ur7sBriefImg from "../components/ultimaterugbysevens/aboutTileImg";


const Index = () => (
  <div>
    <Head>
      <title>sebsilbernagl</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Link>
          <Nav.Link href="/about" active>
            about
          </Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>work</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Disabled</Nav.Link>
      </Nav.Item>
    </Nav>
    {/* 1. Hero. */}
    <Row>
    <Col className="align-self-center align-items-center">
    <Image lg={12}
            md={12}
            sm={12}
            src="../static/logo.svg"
            className="padding10"/>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Col>
    </Row>
    ;
    <Container fluid>
      <Row>
        <Col lg={6} md={12}>
          <Link href="/about">
            <a>About</a>
          </Link>
          <br />
          <Link href="/work">
            <a>Work</a>
          </Link>
          <br />
          <Link href="/project">
            <a>Project</a>
          </Link>
          <br />
        </Col>
        <Col lg={6}>
          <p>Hello Next.js</p>
        </Col>
      </Row>
      <Row>
        <AboutTileImg />
        <AboutSummary />
      </Row>
      <Row>
      <Ur7sDisc></Ur7sDisc>
        <Ur7sBriefImg></Ur7sBriefImg>
      </Row>
    </Container>
    ;
    <style jsx>{`
      h1 {
        text-align: center;
      }
      .jumbotron {
        background-color: yellow;
      }
      .content_right {
        padding-left: 5%;
        padding-right: 5%;
      }
      p {
        color: red;
        display: flex;
        align-items: center;
      }
    `}</style>
  </div>
);

export default Index;
