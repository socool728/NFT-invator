import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Duplicate = () => {
  return (
    <OverlayTrigger
      key="duplicate"
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">Duplicate</Tooltip>}
    >
      <i className="far fa-clone text-muted px-3 fs-5 cursor-p" />
    </OverlayTrigger>
  );
};

export default Duplicate;
