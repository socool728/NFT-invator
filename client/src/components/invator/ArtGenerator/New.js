import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { newItem } from "../../../actions/controlart";

const New = () => {
  return (
    <OverlayTrigger
      key="new"
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">New</Tooltip>}
    >
      <i
        className="fas fa-plus text-muted px-3 fs-5 cursor-p"
        onClick={newItem}
      />
    </OverlayTrigger>
  );
};

export default New;
