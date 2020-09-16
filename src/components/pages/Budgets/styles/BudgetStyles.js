import styled from 'styled-components';

export const BudgetsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  border-bottom: 1px solid #e266b5;
  padding-top: 5% @media (max-width: 765px) {
    display: flex;
    width: 100%;
    padding: 0;
    margin: 0;
    flex-direction: column-reverse;
    border-bottom: 0;
  }
`;
export const BudgetsInfo = styled.div`
  margin: 0 auto;
  width: 50%;
  @media (max-width: 765px) {
    width: 100%;
    text-align: center;
    margin: 0;
  }
`;
