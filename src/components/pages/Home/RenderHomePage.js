import React from 'react';
import Nav from '../Nav/Nav';
import RenderGraphs from '../../graphs/RenderGraphs';
import { HomeWrapper, HeaderContainer } from './styles/HomeStyles';

function RenderHomePage(props) {
  const { userInfo, authService } = props;

  return (
    <HomeWrapper>
      <Nav authService={authService} />
      <HeaderContainer>
        <h1>Hi {userInfo.name} Welcome to your SaverLife Dashboard!</h1>
        <div>
          <p>Here is your spendings and savings history in graphs.</p>
        </div>
      </HeaderContainer>

      <RenderGraphs />
    </HomeWrapper>
  );
}
export default RenderHomePage;
