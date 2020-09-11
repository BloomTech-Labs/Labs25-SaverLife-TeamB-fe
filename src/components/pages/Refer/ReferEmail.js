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
        <img
          src="https://images.unsplash.com/photo-1586034679970-cb7b5fc4928a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          className="piggy"
          width="1000"
          height="600"
        />
      </HeaderContainer>
    </HomeWrapper>
  );
};

export default ReferEmail;
