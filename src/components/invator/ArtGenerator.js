import React from "react";
import { Row, Col, OverlayTrigger, Tooltip, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Shuffle from "./Shuffle";

const ArtGenerator = ({ name, ...props }) => {
  return (
    <>
      <Row
        className="ps-4 border-bottom position-fixed border-start"
        id="artnav"
      >
        <Col xs={1}>
          <Link to="ss" className="navs">
            <p className="py-4 navsActive">Design</p>
          </Link>
        </Col>
        <Col xs={1}>
          <Link to="/settings" className="navs">
            <p className="py-4">Metadata</p>
          </Link>
        </Col>
        <Col xs={1} className="navs">
          <Link to="generate" className="navs">
            <p className="py-4">Generate</p>
          </Link>
        </Col>
        <Col xs={6} />
        <Col>
          <div className="py-4">
            <OverlayTrigger
              key="new"
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">New</Tooltip>}
            >
              <i className="fas fa-plus text-muted px-3 fs-5" />
            </OverlayTrigger>
            <OverlayTrigger
              key="duplicate"
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">Duplicate</Tooltip>}
            >
              <i className="far fa-clone text-muted px-3 fs-5" />
            </OverlayTrigger>
            <OverlayTrigger
              key="save"
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">Save</Tooltip>}
            >
              <i className="far fa-star text-muted px-3 fs-5" />
            </OverlayTrigger>
            <Shuffle key="shuffle" placement="end" name="end" />

            <OverlayTrigger
              key="export"
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">Export</Tooltip>}
            >
              <i className="fas fa-download text-muted ps-3 fs-5" />
            </OverlayTrigger>
          </div>
        </Col>
      </Row>
      <Row className="border-bottom position-fixed p-1 border-end bg-white controlgen"></Row>
      <Container className="width-500p mt-130p ">
        <div className="d-flex justify-content-between width-500p">
          <input
            type="text"
            placeholder="Rename token #1"
            className="d-inline-flex flex-row p-0 border-bottom border-primary border-2 bg-light"
            id="imgname"
          />
          <Link
            to="/settings/output"
            className="btn btn-light d-inline-flex mt-3"
          >
            <i className="far fa-image"> Quality</i>
          </Link>
        </div>

        <img className="mt-3 border shadow-sm width-500p height-500p" alt="" />
      </Container>
      <Row className="py-1 border-top position-fixed bottom-0 bg-white width-58"></Row>
    </>
  );
};

export default ArtGenerator;
