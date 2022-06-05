import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Export = () => {
  return (
    <OverlayTrigger
      key="export"
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">Export</Tooltip>}
    >
      <i className="fas fa-download text-muted ps-3 fs-5 cursor-p" />
    </OverlayTrigger>
  );
};

export default Export;
