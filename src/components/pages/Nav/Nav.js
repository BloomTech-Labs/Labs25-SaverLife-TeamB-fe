import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const NavWrapper = styled.div`
  border-bottom: 8px solid rgb(189, 35, 125);
  margin-bottom: 30px;
`;

const NavContents = styled.div`
  margin: 0 auto;
  padding: 30px;
  display: flex;
  width: 65%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 765px) {
    width: 100%;
    flex-direction: column;
  }
`;

const SLLogo = styled.img`
  width: 170px;
  @media (max-width: 765px) {
    width: 100%;
    margin-bottom: 10%;
  }
`;

const LogoutButton = styled.button`
  border: 1px solid rgb(189, 35, 125);
  color: rgb(189, 35, 125);
  border-radius: 12px;
  font-size: 20px;
  font-weight: 500;
  background-color: white;
  padding: 0px 30px;
  height: 40px;
  :hover {
    color: white;
    background-color: rgb(189, 35, 125);
    border: 1px solid rgb(189, 35, 125);
  }
`;

function Nav({ authService }) {
  return (
    <NavWrapper>
      <NavContents>
        <a href="#">
          <SLLogo src="https://www.saverlife.org/assets/logo-saverlife-a4b213a1d9e8e51559d7f70d9f479f1473f536e12c8c4543654d5b3964004b0f.svg" />
        </a>
        <LogoutButton
          className="logout"
          type="primary"
          onClick={() => authService.logout()}
        >
          Logout
        </LogoutButton>
      </NavContents>
    </NavWrapper>
  );
}

export default Nav;
