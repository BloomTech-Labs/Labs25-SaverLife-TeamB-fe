import React from 'react';
import Plot from 'react-plotly.js';

function Graph4() {
  return (
    <Plot
      data={[
        {
          type: 'bar',
          //   values: [55, 45],
          x: [1, 2],
          y: [2, 4],
          labels: ['Your Dollars Saved', 'Average Dollars Savings'],
        },
      ]}
      layout={{ width: 420, height: 500, title: 'Compared Savings' }}
    />
  );
}
export default Graph4;
