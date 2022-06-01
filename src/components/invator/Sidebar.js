import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  return (
    <Nav
      className="d-none d-md-block bg-primary sidebar"
      activeKey="#Accessproes"
      // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className="sidebar-sticky">
        <img prop="prop" src="/img/logo-icon.fb39a041.svg" />
        <p className="fs-5"> NFT</p>
      </div>
      <Nav.Item>
        <Nav.Link href="#Accessories">Accessories</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Headgear">Headgear</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Clothes">Clothes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Eyes">Eyes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Expression">Expression</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Skin">Skin</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#Background">Background</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
