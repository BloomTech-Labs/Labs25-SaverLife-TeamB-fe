import React from 'react';
import Plot from 'react-plotly.js';

function ComparedSavings() {
  return (
    <div className="CompSavingsContainer">
      <Plot
        data={[
          {
            type: 'bar',
            x: ['You', 'Other Users'], //how to add text to graphs
            y: [2, 4],
            marker: { color: ['hotpink', 'purple'] }, //each color is for new section of graph
          },
        ]}
        // layout={{ width: 420, height: 500, title: 'Compared Savings' }}
        useResizeHandler
        style={{ width: '100%', height: 400 }}
        layout={{ autosize: true, title: 'Compared Savings' }}
      />
      <div className="CompSavings-info">
        <h1>Your Savings this Month</h1>
        <p>You saved this much in this category this month.</p>
      </div>
    </div>
  );
}
export default ComparedSavings;
