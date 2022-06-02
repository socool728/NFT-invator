import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SettingNav = () => {
  return (
    <div>
      <Row className="border-bottom p-4 fw-bold">Settings</Row>
      <Row className="border-bottom p-4">
        <Link to="/settings" className="link-dark pe-0">
          <div>
            <i className="fas fa-cog text-muted me-2" />
            <b>Basic Settings</b>
          </div>
          <small className="text-muted ms-4 ps-1">
            Configure metadata and commission.
          </small>
        </Link>
      </Row>
      <Row className="border-bottom p-4">
        <Link to="/settings/weighting" className="link-dark">
          <div>
            <i className="fas fa-sliders-h text-muted me-2 fw-5" />
            <b>Traits</b>
          </div>
          <small className="text-muted ms-4 ps-1">
            Adjust trait names and rarity.
          </small>
        </Link>
      </Row>
      <Row className="border-bottom p-4">
        <Link to="/settings/output" className="link-dark">
          <div>
            <i className="far fa-image text-muted me-2 fs-5" />
            <b>Render Settings</b>
          </div>
          <small className="text-muted ms-4 ps-1">
            Dimensions, quality and file format.
          </small>
        </Link>
      </Row>
    </div>
  );
};

export default SettingNav;
