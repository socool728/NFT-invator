import React, { useState } from "react";
import { Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";

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
          className="fas fa-sync text-muted px-3"
          style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={handleShow}
        />
      </OverlayTrigger>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Shuffle;
