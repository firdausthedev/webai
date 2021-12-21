import React from "react";
import styled from "styled-components";

const Navbar = ({ showModelFunc, showModelUpload }) => {
  return (
    <NavContainer id='navbar'>
      <Nav>
        <div className='title-wrapper'>
          <h2>ImageAI</h2>
          <a onClick={() => showModelFunc(showModelUpload)}>
            {!showModelUpload ? "Create" : "Test"} Model
          </a>
        </div>
        <ul>
          <li>
            <a>Help</a>
          </li>
        </ul>
      </Nav>
    </NavContainer>
  );
};

const Nav = styled.nav`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  opacity: 0.9;
  margin-bottom: 1.5rem;
  ul {
    list-style: none;
    display: flex;
  }
  a {
    color: white;
    background: black;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    margin: 0 0.25rem;
    font-size: 0.8rem;
    text-decoration: none;
    &:hover {
      background: white;
      color: black;
      transition: 1s;
    }
  }

  .title-wrapper {
    padding: 0.1rem 1rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 1rem;
    }
    a {
      margin-left: 1.3rem;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    .title-wrapper {
      border-radius: 10px;
      margin-bottom: 1rem;
      h2 {
        font-size: 0.8rem;
      }
    }
    a {
      margin: 2rem 0.25rem;
    }
  }
`;

const NavContainer = styled.div`
  background-color: rgba(230, 230, 230, 0.75);
  color: black;
`;

export default Navbar;
