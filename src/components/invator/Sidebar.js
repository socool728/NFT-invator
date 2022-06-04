import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar = (props) => {
  return (
    <Nav
      className="d-none d-md-block bg-primary sidebar"
      activeKey="#Accessproes"
      // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className="sidebar-sticky">
        <img src="/img/logo-icon.fb39a041.svg" alt="" />
        <p className="fs-5"> NFT</p>
      </div>
      {props.collections &&
        props.collections.map((c) => {
          return (
            <Nav.Item>
              <Nav.Link href={`#${c}`} key={c}>
                {c}
              </Nav.Link>
            </Nav.Item>
          );
        })}
    </Nav>
  );
};

export default Sidebar;
