import React from 'react';
import {
  NavWrapper,
  NavContents,
  SLLogo,
  LogoutButton,
} from './styles/NavStyles';

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
