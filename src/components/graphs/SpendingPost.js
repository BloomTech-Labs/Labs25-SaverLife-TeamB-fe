import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { getSpending } from '../../api';
import { SpendingContainer, SpendingInfo } from './styles/GraphStyles';

const initialState = {
  data: [],
  layout: {},
};

function SpendingPost(props) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    function fetchDSData() {
      getSpending(props.url, props.authState, props.userInfo)
        .then(res => {
          setData(res);
        })
        .catch(err => {
          setData({ data: null, err });
        });
    }
    fetchDSData();
  }, [props.url, props.authState, props.userInfo]);

  return (
    <SpendingContainer>
      <SpendingInfo />
      <h1>Monthly Spendings by Category</h1>
      <SpendingInfo />

      <SpendingInfo>
        <Plot
          data={data.data}
          useResizeHandler
          style={{ width: '77.5%', height: 500 }}
          layout={
            (data.layout,
            { yaxis: { fixedrange: true }, xaxis: { fixedrange: true } })
          }
        />
      </SpendingInfo>
    </SpendingContainer>
  );
}

export default SpendingPost;
