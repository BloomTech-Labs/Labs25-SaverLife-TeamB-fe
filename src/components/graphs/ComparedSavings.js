import React from 'react';
import Plot from 'react-plotly.js';
import styled from 'styled-components';

const ComparedSavingsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 5%;
  width: 80%;
  border-bottom: 1px solid #e266b5;
`;
const ComparedSavingsInfo = styled.div`
  margin: 0 auto;
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
          layout={{ width: 420, height: 500, title: 'Compared Savings' }}
        />
      </ComparedSavingsInfo>
    </ComparedSavingsContainer>
  );
}
export default ComparedSavings;
