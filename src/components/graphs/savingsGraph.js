import React from 'react';
import Plot from 'react-plotly.js';

function SavingsGraph() {
  return (
    <Plot
      data={[
        {
          type: 'pie',
          values: [19, 26, 55],
          labels: ['Food', 'Rent', 'Utility'],
        },
      ]}
      layout={{ width: 420, height: 540, title: 'Your Savings' }}
    />
  );
}
export default SavingsGraph;
