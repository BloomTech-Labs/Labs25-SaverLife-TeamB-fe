import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { getMoneyFlow } from '../../api';
import { MoneyFlowContainer, MoneyFlowInfo } from './styles/GraphStyles';

const initialState = {
  data: [],
  layout: {},
};

function MoneyFlow(props) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    function fetchDSData() {
      getMoneyFlow(props.url, props.authState, props.userInfo)
        .then(res => {
          setData(res);
        })
        .catch(err => {
          setData({ data: null, err });
          console.log(err);
        });
    }
    fetchDSData();
  }, [props.url, props.authState, props.userInfo]);

  return (
    <MoneyFlowContainer>
      <MoneyFlowInfo>
        <h1>Your Money Flow this Past Week</h1>
      </MoneyFlowInfo>

      <MoneyFlowInfo>
        <Plot
          data={data.data}
          useResizeHandler
          style={{ width: '100%', height: 400 }}
          layout={
            (data.layout,
            { yaxis: { fixedrange: true }, xaxis: { fixedrange: true } })
          }
        />
      </MoneyFlowInfo>
    </MoneyFlowContainer>
  );
}
export default MoneyFlow;
