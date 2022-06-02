import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  return (
    <Nav
      className="d-none d-md-block bg-primary sidebar"
      activeKey="/generate"
      // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className="sidebar-sticky">
        <img src="/img/logo-icon.fb39a041.svg" alt="" />
        <p className="fs-5">NFT</p>
      </div>
      <Nav.Item>
        <Nav.Link href="/">
          <i className="fas fa-arrow-left mb-2 fs-3" />
          <p className="m-0">Back to Designer</p>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/settings">
          <i className="fas fa-cog mb-2 fs-3" />
          <p className="m-0">Settings</p>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/generate">
          <i className="far fa-play-circle mb-2 fs-3" />
          <p className="m-0">Generate</p>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
