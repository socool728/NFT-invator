import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { saveAs } from "file-saver";

const Export = ({ url, method }) => {
  return (
    <OverlayTrigger
      key="export"
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">Export</Tooltip>}
    >
      <i
        className="fas fa-download text-muted ps-3 fs-5 cursor-p"
        onClick={() => {
          const image =
            url.split("/")[url.split("/").length - 1] + "." + method;
          saveAs(url, image);
        }}
      />
    </OverlayTrigger>
  );
};

export default Export;
