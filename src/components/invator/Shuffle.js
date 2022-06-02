import React, { useState } from "react";
import {
  Container,
  Offcanvas,
  OverlayTrigger,
  Tooltip,
  Row,
  Col,
  Button,
} from "react-bootstrap";

const Shuffle = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <OverlayTrigger
        key="suffle"
        placement="bottom"
        overlay={<Tooltip id="tooltip-bottom">Shuffle</Tooltip>}
      >
        <i
          className="fas fa-sync text-muted px-3 fs-5 cursor-p"
          onClick={handleShow}
        />
      </OverlayTrigger>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shuffle</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col sm={3}>
                <small className="text-muted">Slect traits</small>
              </Col>
              <Col sm={4} />
              <Col>
                <Button className="me-1 btn-sm bg-white text-primary border-0 fw-bold">
                  All
                </Button>
                <span className="text-muted"> | </span>
                <Button className="ms-1 btn-sm bg-white text-primary border-0 fw-bold">
                  None
                </Button>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Shuffle;
