import React from 'react';
import { Button } from 'antd';

function Nav({ authService }) {
  return (
    <div className="nav">
      <div className="navItems">
        <a href="#">
          <img
            className="logo"
            src="https://www.saverlife.org/assets/logo-saverlife-a4b213a1d9e8e51559d7f70d9f479f1473f536e12c8c4543654d5b3964004b0f.svg"
          />
        </a>
        <Button
          className="logout"
          type="primary"
          onClick={() => authService.logout()}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Nav;
