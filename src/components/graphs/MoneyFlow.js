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
`;
const MoneyFlowInfo = styled.div`
  margin: 0 auto;
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
        <Plot data={data.data} layout={data.layout} />
      </MoneyFlowInfo>
    </MoneyFlowContainer>
  );
}
export default MoneyFlow;
