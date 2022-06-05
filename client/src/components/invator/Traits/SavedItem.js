import React from "react";
import { Col, Button } from "react-bootstrap";
import { selectSavedItem } from "../../../actions/controlart";

const SavedItem = ({ save }) => {
  const clickSavedItem = (e) => {
    selectSavedItem({
      workspace: save.workspace,
      name: save.name,
      url: save.url,
      info: save.info,
    });
  };
  return (
    <Col xs={4} className="my-2 text-center">
      <Button
        className="width-95p height-95p rounded-3 bg-light p-0 border-0"
        onClick={clickSavedItem}
      >
        <img
          src={save.url}
          className="artImage width-100 height-100 rounded-3"
          alt={save.name}
          id={save.workspace}
        />
      </Button>
      <small className="text-muted">{save.name}</small>
    </Col>
  );
};

export default SavedItem;
