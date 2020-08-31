import React from 'react';
import Plot from 'react-plotly.js';
import styled from 'styled-components';
import Button from '../common/Button';

const SavingsGraphContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 5%;
  width: 80%;
  border-bottom: 5px solid #e266b5;
  @media (max-width: 765px) {
    width: 100%;
    margin: 0;
    padding: 0;
    flex-direction: column-reverse;
  }
`;
const SavingsGraphInfo = styled.div`
  margin: 0 auto;
  @media (max-width: 765px) {
    margin: 0;
    text-align: center;
  }
`;

function SavingsGraph() {
  return (
    <SavingsGraphContainer>
      <SavingsGraphInfo>
        <h1>Your Savings this Month</h1>
        <p>You saved this much in this category this month.</p>
      </SavingsGraphInfo>
      <SavingsGraphInfo>
        <Plot
          data={[
            {
              type: 'pie',
              values: [19, 26, 55],
              labels: ['Food', 'Rent', 'Utility'],
            },
          ]}
          useResizeHandler
          style={{ width: '100%', height: 400 }}
          layout={{
            autosize: true,
            title: 'Your Spendings',
            yaxis: { fixedrange: true },
            xaxis: { fixedrange: true },
          }}
        />
      </SavingsGraphInfo>
    </SavingsGraphContainer>
  );
}
export default SavingsGraph;
