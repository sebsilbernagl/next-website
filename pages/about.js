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
import "../style/style.scss";
import Ur7sHeroImg from "../components/ultimaterugbysevens/ur7shero";

const About = () => (
    <div>
        <Ur7sHeroImg/>
    </div>
)

export default About