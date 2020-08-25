import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import {
  SavingsGraph,
  SpendingPost,
  ComparedSavings,
  ComparedSpendings,
  GraphCarousel,
} from '../../graphs';
import Nav from '../Nav/Nav';

import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';

function RenderHomePage(props) {
  const { userInfo, authService } = props;

  const { authState } = useOktaAuth();

  // this function gets the width of the page, and renders either the graph carousel (mobile) or all of the graphs individually (desktop)
  const renderGraphs = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 765) {
      return (
        <>
          <SavingsGraph />

          <SpendingPost
            authState={authState}
            url={process.env.REACT_APP_API_URI + '/data/spending'}
          />

          <ComparedSavings />

          <ComparedSpendings />
        </>
      );
    } else {
      return (
        <GraphCarousel title="Graphs">
          <SavingsGraph />

          <SpendingPost />

          <ComparedSavings />

          <ComparedSpendings />
        </GraphCarousel>
      );
    }
  };
  return (
    <div>
      <Nav authService={authService} />
      <h1>Hi {userInfo.name} Welcome to your SaverLife Dashboard!</h1>
      <div>
        <p>Here is your spendings and savings history in graphs.</p>
        {renderGraphs()}

        <p>
          <Link to="/profile-list">Profiles Example</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;
