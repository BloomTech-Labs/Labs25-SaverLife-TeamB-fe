import React from 'react';
import {
  MoneyFlow,
  SpendingPost,
  SpendingPostBar,
  Budgets,
  ComparedSpendings,
  GraphCarousel,
} from '../graphs';
import Media from 'react-media';
import { RenderGraphWrapper } from './styles/GraphStyles';

import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';

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

            <SpendingPostBar
              authState={authState}
              url={process.env.REACT_APP_API_URI + 'data/spending'}
            />

            <Budgets
              authState={authState}
              url={process.env.REACT_APP_API_URI + 'data/futureBudget'}
            />

            <ComparedSpendings />
          </>
        )}
      />
      <Media
        query="(max-width: 765px)"
        render={() => (
          <GraphCarousel>
            <RenderGraphWrapper>
              <MoneyFlow
                authState={authState}
                url={process.env.REACT_APP_API_URI + 'data/moneyflow'}
              />
            </RenderGraphWrapper>
            <RenderGraphWrapper>
              <SpendingPost
                authState={authState}
                url={process.env.REACT_APP_API_URI + 'data/spending'}
              />
            </RenderGraphWrapper>
            <RenderGraphWrapper>
              <Budgets
                authState={authState}
                url={process.env.REACT_APP_API_URI + 'data/futureBudget'}
              />
            </RenderGraphWrapper>
            <RenderGraphWrapper>
              <ComparedSpendings />
            </RenderGraphWrapper>

            <RenderGraphWrapper>
              <SpendingPostBar
                authState={authState}
                url={process.env.REACT_APP_API_URI + 'data/spending'}
              />
            </RenderGraphWrapper>
          </GraphCarousel>
        )}
      />
    </>
  );
};

export default RenderGraphs;
