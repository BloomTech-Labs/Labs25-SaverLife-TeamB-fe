import React from 'react';
import Plot from 'react-plotly.js';
import styled from 'styled-components';
// import { ProgressBar, Button } from 'react-bootstrap';

const BudgetsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 5%;
  width: 80%;
  border-bottom: 1px solid #e266b5;
  @media (max-width: 765px) {
    width: 100%;
    padding: 0;
    margin: 0;
    flex-direction: column-reverse;
  }
`;
const BudgetsInfo = styled.div`
  margin: 0 auto;
  @media (max-width: 765px) {
    text-align: center;
    margin: 0;
  }
`;

function Budgets() {
  return (
    <BudgetsContainer>
      <BudgetsInfo>
        <h1>Here are your Budgets for this month</h1>
        <p>
          You saved this much in this category from your budgeting this month.
        </p>
      </BudgetsInfo>
      <BudgetsInfo>
        <Plot
          data={[
            {
              type: 'bar',
              x: ['You', 'Other Users'], //how to add text to graphs
              y: [2, 4],
              marker: { color: ['hotpink', 'purple'] }, //each color is for new section of graph
            },
          ]}
          useResizeHandler
          style={{ width: '100%', height: 400 }}
          layout={{
            autosize: true,
            title: 'Compared Savings',
            yaxis: { fixedrange: true },
            xaxis: { fixedrange: true },
          }}
        />
      </BudgetsInfo>
    </BudgetsContainer>
  );
}
export default Budgets;
