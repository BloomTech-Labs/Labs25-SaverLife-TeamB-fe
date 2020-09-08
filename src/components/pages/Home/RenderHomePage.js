import React from 'react';
import { Link } from 'react-router-dom';
import {
  MoneyFlow,
  SpendingPost,
  ComparedSavings,
  ComparedSpendings,
  GraphCarousel,
} from '../../graphs';
import Nav from '../Nav/Nav';
import styled from 'styled-components';
import RenderGraphs from '../../graphs/RenderGraphs';

import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';

const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`;
const HomeWrapper = styled.div`
  @media (max-width: 765px) {
    text-align: center;
    width: 100%;
  }
`;

function RenderHomePage(props) {
  const { userInfo, authService } = props;

  // this function gets the width of the page, and renders either the graph carousel (mobile) or all of the graphs individually (desktop)
  return (
    <HomeWrapper>
      <Nav authService={authService} />
      <HeaderContainer>
        <h1>Here is your spendings and savings history in graphs.</h1>
      </HeaderContainer>

      <RenderGraphs />
    </HomeWrapper>
  );
}
export default RenderHomePage;
