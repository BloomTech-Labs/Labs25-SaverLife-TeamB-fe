import React from 'react';
import Plot from 'react-plotly.js';

function ComparedSavings() {
  return (
    <Plot
      data={[
        {
          type: 'bar',
          x: ['You', 'Other Users'],
          y: [2, 4],
          //   labels: ['Your Dollars Saved', 'Average Dollars Savings'],
          marker: { color: ['hotpink', 'purple'] }, //each color is for new section of graph
        },
      ]}
      layout={{ width: 420, height: 500, title: 'Compared Savings' }}
    />
  );
}
export default ComparedSavings;
