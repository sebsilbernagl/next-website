import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../style/style.scss";

const Ur7sCard = () => (
  <Card className="dropshadow">
    <Card.Img variant="top" src="static/ur7sHero.jpg" />
    <Card.Body>
      <Card.Title>
        <h4>Ultimate Rugby Sevens</h4>
      </Card.Title>
      <Card.Text>
        Digital presence pivot, website build, brand development
      </Card.Text>
      <Card.Text>#website #digitalbranding</Card.Text>
    </Card.Body>
    <Card.Body>
      <Card.Link href="#">
        <Button variant="outline-dark">View Project</Button>
      </Card.Link>
    </Card.Body>
  </Card>
);

export default Ur7sCard;
