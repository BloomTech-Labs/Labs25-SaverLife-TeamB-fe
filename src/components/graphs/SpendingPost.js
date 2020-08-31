import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import styled from 'styled-components';
import { getDSData } from '../../api';

const SpendingContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 5%;
  width: 80%;
  border-bottom: 1px solid #e266b5;
`;
const SpendingInfo = styled.div`
  margin: 0 auto;
`;

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
        <Plot data={data.data} layout={data.layout} />
      </SpendingInfo>

      <SpendingInfo>
        <h1>Your Savings this Month</h1>
        <p>You saved this much in this category this month.</p>
      </SpendingInfo>
    </SpendingContainer>
  );
}

export default SpendingPost;
