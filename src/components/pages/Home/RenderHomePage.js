import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import {
  SavingsGraph,
  Budgets,
  ComparedSavings,
  ComparedSpendings,
} from '../../graphs';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <h1>Hi {userInfo.name} Welcome to your SaverLife Dashboard!</h1>
      <div>
        <p>Here is your spendings and savings history in graphs.</p>

        <div className="graphs-container">
          <SavingsGraph />

          <Budgets />

          <ComparedSavings />

          <ComparedSpendings />
        </div>
        <p>
          <Link to="/profile-list">Profiles Example</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
        </p>
        <p>
          <Button type="primary" onClick={() => authService.logout()}>
            Logout
          </Button>
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;
