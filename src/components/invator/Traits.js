import React from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import ArtHistory from "./ArtHistory";

const Traits = () => {
  return (
    <>
      <div className="overflow-scroll height-50">
        <Row className="border-bottom shadow-sm border-start bg-white position-fixed width-100 height-76p">
          <b className="m-0 py-4 text-muted">Traits</b>
        </Row>
        <div className="pt-5 pb-3"></div>
        <ArtHistory />
        <ArtHistory />
        <ArtHistory />
        <ArtHistory />
        <ArtHistory />
        <ArtHistory />
      </div>
      <div className="overflow-scroll height-50">
        <Row className="border-bottom border-top shadow-sm bg-white position-fixed width-100 height-76p">
          <Col sm={1} className="m-0 py-4 text-muted">
            <p>
              <b>Saved</b>
            </p>
          </Col>
          <Col sm={1} className="d-flex flex-row-reverse">
            <OverlayTrigger
              key="exoprtAll"
              placement="top"
              overlay={<Tooltip id="tooltip-top">Export All</Tooltip>}
            >
              <i className="fas fa-cloud-download-alt text-muted my-4 ms-2 fs-4" />
            </OverlayTrigger>
            <OverlayTrigger
              key="createVideo"
              placement="top"
              overlay={<Tooltip id="tooltip-top">Create Promo Video</Tooltip>}
            >
              <i className="fas fa-video text-muted my-4 mx-2 fs-4" />
            </OverlayTrigger>
          </Col>
          <Col sm={10} />
        </Row>
      </div>
    </>
  );
};

export default Traits;
