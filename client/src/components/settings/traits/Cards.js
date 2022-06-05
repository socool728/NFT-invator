import React from "react";
import classNames from "classnames";
import { Col } from "react-bootstrap";

const Cards = ({ title, demo, Id, isActive, className }) => {
  return (
    <Col
      id={Id}
      className={classNames("border p-3 shadow-sm cards position-relative", {
        "border p-3 cards shadow-sm border-primary border-2 position-relative":
          isActive,
      })}
    >
      <i
        className="fas fa-check-circle text-primary position-absolute top-0 end-0 mt-3 me-3"
        style={{
          display: isActive ? " " : "none",
        }}
      />
      <p className="mb-1 text-start">{title}</p>
      <p className="text-muted m-0 text-start">{demo}</p>
    </Col>
  );
};

export default Cards;
