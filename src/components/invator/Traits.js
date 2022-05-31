import React from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import ArtHistory from "./ArtHistory";

const Traits = () => {
  return (
    <>
      <div style={{ height: "50vh", overflowY: "scroll" }}>
        <Row
          className="border-bottom shadow-sm"
          style={{
            position: "fixed",
            width: "100%",
            backgroundColor: "#ffffff",
          }}
        >
          <p className="m-0 py-4 text-muted" style={{ fontWeight: "500" }}>
            Traits
          </p>
        </Row>
        <div className="pt-5 pb-3"></div>
        <ArtHistory />
        <ArtHistory />
        <ArtHistory />
        <ArtHistory />
        <ArtHistory />
        <ArtHistory />
      </div>
      <div style={{ height: "50vh", overflowY: "scroll" }}>
        <Row
          className="border-bottom border-top shadow-sm"
          style={{
            position: "fixed",
            width: "100%",
            backgroundColor: "#ffffff",
          }}
        >
          <Col
            sm={1}
            className="m-0 py-4 text-muted"
            style={{ fontWeight: "500" }}
          >
            Traits
          </Col>
          <Col sm={1} className="d-flex flex-row-reverse">
            <OverlayTrigger
              key="exoprtAll"
              placement="top"
              overlay={<Tooltip id="tooltip-top">Export All</Tooltip>}
            >
              <i
                className="fas fa-cloud-download-alt text-muted py-4 ps-2"
                style={{ fontSize: "20px" }}
              />
            </OverlayTrigger>
            <OverlayTrigger
              key="createVideo"
              placement="top"
              overlay={<Tooltip id="tooltip-top">Create Promo Video</Tooltip>}
            >
              <i
                className="fas fa-video text-muted py-4 px-2"
                style={{ fontSize: "20px" }}
              />
            </OverlayTrigger>
          </Col>
          <Col sm={10} />
        </Row>
      </div>
    </>
  );
};

export default Traits;
