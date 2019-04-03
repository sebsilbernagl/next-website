import Link from "next/link";
import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const AboutSummary = (props) => (
          <Col
            lg={6}
            md={6}
            sm={12}
            className="align-self-center content_right padding5"
          >
            <h3>ABOUT ME</h3>
            <p>
              I'm a Cape Town based web developer that focuses on helping
              businesses create their digital brand and strategise and optimise
              their marketing plan to get them there.
            </p>
          </Col>
);

export default AboutSummary;