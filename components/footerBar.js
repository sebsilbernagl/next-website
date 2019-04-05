import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../style/style.scss";
import TwelveElevenCard from "./twelveeleven/twelveElevenCard";

const FooterBar = () => (
  <div>
    <Row fluid className="footerbar text-center paddin">
      <Col auto />
      <Col
        lg={6}
        md={8}
        sm={12}
        className="align-self-center align-items-center text-left padding5"
      >
        <h2>Contact Me</h2>
        <p className="text-left">
          Do you have a project that you would like to discuss? Or do you just
          want some advice on how you could be best leveraging your tools
          available to you?{" "}
          <a href="mailto:seb@sebsilbernagl.me">Send me a mail!</a>
          <br />
          <br />
          I'm available as both a consultant and a freelancer.
        </p>
      </Col>
      <Col auto />
    </Row>
    <Row>
      <Col sm={12} className="align-self-center align-items-center text-center">
        <p>Email: seb@sebsilbernagl.me | Phone: +27 (82) 583 2700</p>
        <p className="small">
          Seb Silbernagl 2019 | Built with NextJs & Bootstrap
        </p>
      </Col>
    </Row>
  </div>
);

export default FooterBar;
