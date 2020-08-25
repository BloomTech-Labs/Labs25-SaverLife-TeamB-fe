import React from 'react';
import Plot from 'react-plotly.js';

function SavingsGraph() {
  return (
    <div className="SavingsContainer">
      <Plot
        data={[
          {
            type: 'pie',
            values: [19, 26, 55],
            labels: ['Food', 'Rent', 'Utility'],
          },
        ]}
        //layout={{ width: 420, height: 540, title: 'Your Savings' }}
        useResizeHandler
        style={{ width: '100%', height: 400 }}
        layout={{ autosize: true, title: 'Your Spendings' }}
      />
      <div className="Savings-info">
        <h1>Your Savings this Month</h1>
        <p>You saved this much in this category this month.</p>
      </div>
    </div>
  );
}
export default SavingsGraph;
