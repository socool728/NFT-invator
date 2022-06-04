import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Nav
      className="d-none d-md-block bg-primary sidebar"
      activeKey="/settings"
      // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className="sidebar-sticky">
        <img src="/img/logo-icon.fb39a041.svg" alt="" />
        <p className="fs-5"> NFT</p>
      </div>
      <Nav.Item>
        <Link className="text-blues nav-link" to="/">
          <i className="fas fa-arrow-left mb-2 fs-3" />
          <p className="m-0">Back to Designer</p>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="text-blues nav-link" to="/settings">
          <i className="fas fa-cog mb-2 fs-3" />
          <p className="m-0">Settings</p>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="text-blues nav-link" to="/generate">
          <i className="far fa-play-circle mb-2 fs-3" />
          <p className="m-0">Generate</p>
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
