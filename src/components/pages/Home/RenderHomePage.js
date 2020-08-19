import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import {
  SavingsGraph,
  Budgets,
  ComparedSavings,
  ComparedSpendings,
} from '../../graphs';
import Nav from '../Nav/Nav';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <Nav authService={authService} />
      <h1>Hi {userInfo.name} Welcome to your SaverLife Dashboard!</h1>
      <div>
        <p>Here is your spendings and savings history in graphs.</p>
        <SavingsGraph />

        <Budgets />

        <ComparedSavings />

        <ComparedSpendings />

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
