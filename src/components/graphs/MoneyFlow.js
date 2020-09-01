import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import styled from 'styled-components';
import Button from '../common/Button';
import { getMoneyFlow } from '../../api';

const MoneyFlowContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 5%;
  width: 80%;
  border-bottom: 1px solid #e266b5;
  @media (max-width: 765px) {
    width: 100%;
    padding: 0;
    margin: 0;
    flex-direction: column;
  }
`;
const MoneyFlowInfo = styled.div`
  margin: 0 auto;
  @media (max-width: 765px) {
    text-align: center;
    margin: 0;
`;

const initialState = {
  data: [],
  layout: {},
};

function MoneyFlow(props) {
  const [data, setData] = useState(initialState);

  console.log(data);

  useEffect(() => {
    function fetchDSData() {
      getMoneyFlow(props.url, props.authState)
        .then(res => {
          setData(res);
        })
        .catch(err => {
          setData({ data: null, err });
          console.log(err);
        });
    }
    fetchDSData();
  }, [props.url, props.authState]);

  return (
    <MoneyFlowContainer>
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
