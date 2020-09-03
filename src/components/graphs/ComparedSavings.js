import React from 'react';
import Plot from 'react-plotly.js';
import styled from 'styled-components';

const ComparedSavingsContainer = styled.div`
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
    border-bottom: 0;
  }
`;
const ComparedSavingsInfo = styled.div`
  margin: 0 auto;
  @media (max-width: 765px) {
    text-align: center;
    margin: 0;
  }
`;

function ComparedSavings() {
  return (
    <ComparedSavingsContainer>
      <ComparedSavingsInfo>
        <h1>Your Savings this month compared to last</h1>
        <p>You saved this much in this category this month.</p>
      </ComparedSavingsInfo>
      <ComparedSavingsInfo>
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
      </ComparedSavingsInfo>
    </ComparedSavingsContainer>
  );
}
export default ComparedSavings;
