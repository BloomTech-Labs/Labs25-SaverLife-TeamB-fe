import React from 'react';
import Plot from 'react-plotly.js';
import { SavingsGraphContainer, SavingsGraphInfo } from './styles/GraphStyles';

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
          style={{ width: '100%', height: 500 }}
          layout={{
            autosize: true,
            title: 'Your Spendings',
            yaxis: { fixedrange: true },
            xaxis: { fixedrange: true },
          }}
        />
      </SavingsGraphInfo>

      <SavingsGraphInfo>
        <h1>Compared Monthly Spending</h1>
        <p>
          Here is your spending over the last month. You spent this much in this
          category this month compared to last.
        </p>
      </SavingsGraphInfo>
    </SavingsGraphContainer>
  );
}

export default ComparedSpendings;
