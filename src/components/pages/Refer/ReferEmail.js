import React from 'react';
import Nav from '../Nav/Nav';
import { HomeWrapper, HeaderContainer } from '../Home/styles/HomeStyles';
import { FormInput, FormButton } from '../../common';

const ReferEmail = props => {
  const { userInfo, authService } = props;
  return (
    <HomeWrapper>
      <Nav authService={authService} />
      <HeaderContainer>
        <h1>Refer a Friend!</h1>
        <form onSubmit={e => e.preventDefault()}>
          <FormInput
            placeholder="Email"
            name="email"
            labelId="Friend's Email"
          />
          <FormButton
            buttonText="Submit"
            classType="default"
            disabled="false"
          />
        </form>
      </HeaderContainer>
    </HomeWrapper>
  );
};

export default ReferEmail;
