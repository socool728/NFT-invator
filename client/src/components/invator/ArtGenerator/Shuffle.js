import React, { useState } from "react";
import { Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import ShuffleBody from "./ShuffleBody";

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
          <ShuffleBody />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Shuffle;
