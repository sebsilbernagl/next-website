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
  Nav,
  Card,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../style/style.scss";
import AboutTileImg from "../components/aboutTileImg";
import AboutSummary from "../components/aboutSummary";
import Ur7sDisc from "../components/ultimaterugbysevens/ur7sdisc";
import Ur7sBriefImg from "../components/ultimaterugbysevens/aboutTileImg";
import Ur7sCard from "../components/ultimaterugbysevens/ur7sCard";
import SmcCard from "../components/smcreative/smcCard";
import TwelveElevenCard from "../components/twelveeleven/twelveElevenCard";
import FooterBar from "../components/footerBar";

const Index = () => (
  <div className="no-padding-margin">
    <Head>
      <title>sebsilbernagl</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav>
      <Nav.Item>
          <Nav.Link>about</Nav.Link>
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
    <Row className="vh80 row-blue">
      <Col auto />
      <Col
        lg={6}
        md={8}
        sm={12}
        className="align-self-center align-items-center text-center padding10"
      >
        <Image src="../static/logo.svg" className="padding-bot5" />
        <h1 className="small double-spacing">
            Business Minded Web Development, <br></br> Marketing & Branding Strategies
        </h1>
      </Col>
      <Col auto />
    </Row>
    <Container fluid className="no-padding-margin">
      {/* About Row */}
      <Row>
        <AboutTileImg />
        <AboutSummary />
      </Row>
      {/* Work Row */}
      <Row className="padding-top5 row-blue">
        <Col auto />
        <Col
          lg={6}
          md={8}
          sm={12}
          className="align-self-center align-items-center text-left padding5"
        >
          <h2>Method & Work</h2>
          <p className="text-left">
            The purpose of business oreintated web development is to place emphasis on solving your problem. I work with your 
            business goals and long term objectives to create solutions tailored to your needs – each business is different.<br/><br/>
            I work with great freelancers to form bespoke and powerful teams for various projects. 
            <span> Here's some of our latest work:</span>
          </p>
        </Col>
        <Col auto />
      </Row>
      {/* Cards */}
      <Row className="row-blue padding-bot5">
        <Col auto />
        <Col lg={3}
            md={3}
            sm={12}  className="padding-top-bot2">
          <Ur7sCard/>
        </Col>
        <Col lg={3}
            md={3}
            sm={12}  className="padding-top-bot2">
          <SmcCard />
        </Col>
        <Col lg={3}
            md={3}
            sm={12} className="padding-top-bot2">
          <TwelveElevenCard />
        </Col>
        <Col auto />
      </Row>
      {/* <Row>
        <Ur7sDisc />
        <Ur7sBriefImg />
      </Row> */}
      <FooterBar/>
    </Container>
    ;<style jsx>{``}</style>
  </div>
);

export default Index;
