import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { getDSData } from '../../api';
import { SpendingContainer, SpendingInfo } from './styles/GraphStyles';

const initialState = {
  data: [],
  layout: {},
};

function SpendingPost(props) {
  const [data, setData] = useState(initialState);

  console.log(data);

  useEffect(() => {
    function fetchDSData() {
      getDSData(props.url, props.authState)
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
        <h1>Your Savings this Month</h1>
        <p>You saved this much in this category this month.</p>
      </SpendingInfo>
    </SpendingContainer>
  );
}

export default SpendingPost;
