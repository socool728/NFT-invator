import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { saveChange } from "../../../actions/controlart";

const Duplicate = ({ save, now }) => {
  return (
    <OverlayTrigger
      key="duplicate"
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">Duplicate</Tooltip>}
    >
      <i
        className="far fa-clone text-muted px-3 fs-5 cursor-p"
        onClick={() => {
          const duplication = save;
          for (let i = 0; i < save.length; i++) {
            if (save[i].workspace === now) {
              duplication.push({
                info: save[i].info,
                name: save[i].name,
                url: save[i].url,
                workspace: save.length + 1,
              });
            }
          }
          saveChange(duplication);
        }}
      />
    </OverlayTrigger>
  );
};

export default Duplicate;
