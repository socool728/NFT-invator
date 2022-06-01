import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SettingNav = () => {
  return (
    <div>
      <Row className="border-bottom p-4" style={{ fontWeight: "600" }}>
        Settings
      </Row>
      <Row className="border-bottom p-4" style={{ fontWeight: "400" }}>
        <Link
          to="/settings"
          style={{
            textDecoration: "none",
            fontColor: "#00000 !important",
            paddingRight: "0",
          }}
        >
          <div>
            <i
              className="fas fa-cog text-muted me-2"
              style={{ fontSize: "20px" }}
            />
            Basic Settings
          </div>
          <small className="text-muted ms-4 ps-1">
            Configure metadata and commission.
          </small>
        </Link>
      </Row>
      <Row className="border-bottom p-4" style={{ fontWeight: "400" }}>
        <Link
          to="/settings/weighting"
          style={{
            textDecoration: "none",
            fontColor: "#00000 !important",
            paddingRight: "0",
          }}
        >
          <div>
            <i
              className="fas fa-sliders-h text-muted me-2"
              style={{ fontSize: "20px" }}
            />
            Traits
          </div>
          <small className="text-muted ms-4 ps-1">
            Adjust trait names and rarity.
          </small>
        </Link>
      </Row>
      <Row className="border-bottom p-4" style={{ fontWeight: "400" }}>
        <Link
          to="/settings/output"
          style={{
            textDecoration: "none",
            fontColor: "#00000 !important",
            paddingRight: "0",
          }}
        >
          <div>
            <i
              className="far fa-image text-muted me-2"
              style={{ fontSize: "20px" }}
            />
            Render Settings
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
