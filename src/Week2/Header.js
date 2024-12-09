import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffcc00;
  padding: 10px 20px;
  color: #343a40;
`;

const Header = () => {
  return (
    <Navbar>
      <h1>IRCTC</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
    </Navbar>
  );
};

export default Header;
