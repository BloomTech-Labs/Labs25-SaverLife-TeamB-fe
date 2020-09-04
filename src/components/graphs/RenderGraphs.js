import React from 'react';
import {
  MoneyFlow,
  SpendingPost,
  Budgets,
  ComparedSpendings,
  GraphCarousel,
} from '../graphs';
import Media from 'react-media';
import styled from 'styled-components';

import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';

const GraphWrapper = styled.div`
@media (max-width: 765px) {
    width: 600px;
    margin: 0 auto;
@media (max-width: 600px) {
    width: 500px;
    margin: 0 auto;
@media (max-width: 500px) {
    width: 400px;
    margin: 0 auto;
@media (max-width: 400px) {
    width: 300px;
    margin: 0 auto;
@media (max-width: 300px) {
    width: 250px;
    margin: 0 auto;
`;

const RenderGraphs = () => {
  const { authState } = useOktaAuth();

  return (
    <>
      <Media
        query="(min-width: 765px)"
        render={() => (
          <>
            <MoneyFlow
              authState={authState}
              url={process.env.REACT_APP_API_URI + 'data/moneyflow'}
            />

            <SpendingPost
              authState={authState}
              url={process.env.REACT_APP_API_URI + 'data/spending'}
            />

            <Budgets />

            <ComparedSpendings />
          </>
        )}
      />
      <Media
        query="(max-width: 765px)"
        render={() => (
          <GraphCarousel>
            <GraphWrapper>
              <MoneyFlow
                authState={authState}
                url={process.env.REACT_APP_API_URI + 'data/moneyflow'}
              />
            </GraphWrapper>
            <GraphWrapper>
              <SpendingPost
                authState={authState}
                url={process.env.REACT_APP_API_URI + 'data/spending'}
              />
            </GraphWrapper>
            <GraphWrapper>
              <Budgets />
            </GraphWrapper>
            <GraphWrapper>
              <ComparedSpendings />
            </GraphWrapper>
          </GraphCarousel>
        )}
      />
    </>
  );
};

export default RenderGraphs;
