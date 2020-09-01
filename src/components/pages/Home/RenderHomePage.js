import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import {
  MoneyFlow,
  SpendingPost,
  ComparedSavings,
  ComparedSpendings,
  GraphCarousel,
} from '../../graphs';
import Nav from '../Nav/Nav';
import styled from 'styled-components';

import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';

const HeaderContainer = styled.div`
  align-content: center;
  margin: 0 auto;
  width: 80%;
`;
const HomeWrapper = styled.div`
  @media (max-width: 765px) {
    text-align: center;
  }
`;

function RenderHomePage(props) {
  const { userInfo, authService } = props;

  const { authState } = useOktaAuth();

  // this function gets the width of the page, and renders either the graph carousel (mobile) or all of the graphs individually (desktop)
  const renderGraphs = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 765) {
      return (
        <>
          <MoneyFlow
            authState={authState}
            url={process.env.REACT_APP_API_URI + 'data/moneyflow'}
          />

          <SpendingPost
            authState={authState}
            url={process.env.REACT_APP_API_URI + 'data/spending'}
          />

          <ComparedSavings />

          <ComparedSpendings />
        </>
      );
    } else {
      return (
        <GraphCarousel title="Graphs">
          <MoneyFlow
            authState={authState}
            url={process.env.REACT_APP_API_URI + 'data/moneyflow'}
          />

          <SpendingPost
            authState={authState}
            url={process.env.REACT_APP_API_URI + 'data/spending'}
          />

          <ComparedSavings />

          <ComparedSpendings />
        </GraphCarousel>
      );
    }
  };
  return (
    <HomeWrapper>
      <Nav authService={authService} />
      <HeaderContainer>
        <h1>Hi {userInfo.name} Welcome to your SaverLife Dashboard!</h1>
        <div>
          <p>Here is your spendings and savings history in graphs.</p>
        </div>
      </HeaderContainer>

      {renderGraphs()}
    </HomeWrapper>
  );
}
export default RenderHomePage;
