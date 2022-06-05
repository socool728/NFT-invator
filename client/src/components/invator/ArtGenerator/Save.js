import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { saveItem } from "../../../actions/controlart";

const Save = (props) => {
  const clickSave = () => {
    let state = false;
    let save = props.image.save;
    const edit = {
      workspace: props.image.now,
      name: props.image.new.name,
      url: props.image.new.url,
      info: props.image.new.info,
    };
    save = save.map((u) => {
      if (u.workspace === edit.workspace) {
        state = true;
        return edit;
      } else return u;
    });

    if (!state) {
      edit.workspace = save[save.length - 1]
        ? parseInt(save[save.length - 1].workspace) + 1
        : 1;
      edit.name = save.name ? edit.name : "token #" + edit.workspace;
      save.push(edit);
    }
    saveItem({ workspace: edit.workspace, new: edit, save: save });
  };
  return (
    <OverlayTrigger
      key="save"
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">Save</Tooltip>}
    >
      <i
        className="far fa-star text-muted px-3 fs-5 cursor-p"
        onClick={clickSave}
      />
    </OverlayTrigger>
  );
};

Save.propTypes = {
  image: PropTypes.object,
};

const mapStateToProps = (state) => ({
  image: state.image,
});

export default connect(mapStateToProps, { saveItem })(Save);
