import React from 'react';
import Plot from 'react-plotly.js';

function ComparedSavings() {
  return (
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
  );
}
export default ComparedSavings;
