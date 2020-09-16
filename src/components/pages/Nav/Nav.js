import React from 'react';
import { Link } from 'react-router-dom';
import { Budgets } from '../Budgets';
import { NavWrapper, NavContents, SLLogo, Button } from './styles/NavStyles';

function Nav({ authService }) {
  return (
    <NavWrapper>
      <NavContents>
        <a href="#">
          <SLLogo src="https://www.saverlife.org/assets/logo-saverlife-a4b213a1d9e8e51559d7f70d9f479f1473f536e12c8c4543654d5b3964004b0f.svg" />
        </a>
        <Link to={'/budget'}>
          <Button className="budget" type="primary">
            Budget
          </Button>
        </Link>

        <Button
          className="logout"
          type="primary"
          onClick={() => authService.logout()}
        >
          Logout
        </Button>
      </NavContents>
    </NavWrapper>
  );
}

export default Nav;
