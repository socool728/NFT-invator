import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import FileUpload from "./FileUpload";
import SortableItems from "./SortableItems";

const FileControl = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const display = () => {
    if (!props.image) return <FileUpload />;
    else
      return (
        <SortableItems
          onHide={() => {
            setShow(false);
          }}
        />
      );
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Body className="text-center pt-0">{display()}</Modal.Body>
    </Modal>
  );
};

FileControl.propTypes = {
  image: PropTypes.object,
};

const mapStateToProps = (state) => ({
  image: state.image.image,
});

export default connect(mapStateToProps, {})(FileControl);
