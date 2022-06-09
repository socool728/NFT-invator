import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Artbar from "./Artbar";
import ArtGenerator from "./ArtGenerator";
import Traits from "./Traits";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FileControl from "./FileControl";

const Invator = (props) => {
  return (
    <Container fluid>
      <FileControl />
      <Row>
        <Sidebar collections={props.image.items} />
        <Col sm={2} className="border-end p-0" id="artbar">
          <Artbar collections={props.image.items} image={props.image.image} />
        </Col>
        <Col sm={7} className="over bg-light" id="artgenerate">
          <ArtGenerator />
        </Col>
        <Col className="border-start" id="traits">
          <Traits />
        </Col>
      </Row>
    </Container>
  );
};

Invator.propTypes = {
  image: PropTypes.object,
};

const mapStateToProps = (state) => ({
  image: state.image,
});

export default connect(mapStateToProps, {})(Invator);
