import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { getSpendingBar } from '../../api';
import { SpendingContainer, SpendingInfo } from './styles/GraphStyles';

const initialState = {
  data: [],
  layout: {},
};

function SpendingPostBar(props) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    function fetchDSData() {
      getSpendingBar(props.url, props.authState)
        .then(res => {
          setData(res);
        })
        .catch(err => {
          setData({ data: null, err });
        });
    }
    fetchDSData();
  }, [props.url, props.authState]);

  return (
    <SpendingContainer>
      <SpendingInfo>
        <Plot
          data={data.data}
          useResizeHandler
          style={{ width: '100%', height: 400 }}
          layout={
            (data.layout,
            { yaxis: { fixedrange: true }, xaxis: { fixedrange: true } })
          }
        />
      </SpendingInfo>

      <SpendingInfo>
        <h1>Your Spendings this Week</h1>
        <p>You spent this much in this category this week.</p>
      </SpendingInfo>
    </SpendingContainer>
  );
}

export default SpendingPostBar;
