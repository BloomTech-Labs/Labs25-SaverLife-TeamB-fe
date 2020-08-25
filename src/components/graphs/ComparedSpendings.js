import React from 'react';
import Plot from 'react-plotly.js';

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
    <div className="CompSpendingsContainer">
      <Plot
        data={data}
        useResizeHandler
        style={{ width: '100%', height: 400 }}
        layout={{ autosize: true, title: 'Your Spendings' }}
      />
      <div className="CompSpendings-info">
        <h1>Your Compared Spendings this Month</h1>
        <p>You comparatively spent this much in this category this month.</p>
      </div>
    </div>
  );
}

export default ComparedSpendings;
