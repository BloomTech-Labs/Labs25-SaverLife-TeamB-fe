import React from 'react';
import Nav from '../Nav/Nav';
import { HomeWrapper, HeaderContainer } from '../Home/styles/HomeStyles';

const ReferEmail = props => {
  const { userInfo, authService } = props;
  return (
    <HomeWrapper>
      <Nav authService={authService} />
      <HeaderContainer>
        <h1>Refer a Friend!</h1>
      </HeaderContainer>
    </HomeWrapper>
  );
};

export default ReferEmail;
