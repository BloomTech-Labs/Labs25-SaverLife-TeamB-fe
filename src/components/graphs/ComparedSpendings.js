import React from 'react';
import Plot from 'react-plotly.js';
import styled from 'styled-components';

const SavingsGraphContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 5%;
  width: 80%;
`;
const SavingsGraphInfo = styled.div`
  margin: 0 auto;
`;

function ComparedSpendings() {
  var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter',
  };

  var trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter',
  };

  var data = [trace1, trace2];

  return (
    <SavingsGraphContainer>
      <SavingsGraphInfo>
        <Plot 
          data={data}
          useResizeHandler
          style={{ width: '100%', height: 400 }}
          layout={{ autosize: true, title: 'Your Spendings' }}
         />
      </SavingsGraphInfo>

      <SavingsGraphInfo>
        <h1>Your Spendings this Month</h1>
        <p>You spent this much in this category this month compared to last.</p>
      </SavingsGraphInfo>
    </SavingsGraphContainer>
  );
}

export default ComparedSpendings;
