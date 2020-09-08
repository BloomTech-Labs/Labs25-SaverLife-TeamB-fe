import styled from 'styled-components';

export const BudgetsContainer = styled.div`
  margin: 0 auto;
  padding: 5%;
  width: 80%;
  border-bottom: 1px solid #e266b5;
  @media (max-width: 765px) {
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

export const SavingsGraphContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 5%;
  width: 80%;
  @media (max-width: 765px) {
    width: 100%;
    padding: 0;
    margin: 0;
    flex-direction: column;
  }
`;
export const SavingsGraphInfo = styled.div`
  margin: 0 auto;
  @media (max-width: 765px) {
    text-align: center;
    margin: 0;
  }
`;

export const MoneyFlowContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 5%;
  width: 80%;
  border-bottom: 1px solid #e266b5;
  @media (max-width: 765px) {
    width: 100%;
    padding: 0;
    margin: 0;
    flex-direction: column-reverse;
    border-bottom: 0;
  }
`;
export const MoneyFlowInfo = styled.div`
  margin: 0 auto;
  @media (max-width: 765px) {
    text-align: center;
    margin: 0;
`;

export const RenderGraphWrapper = styled.div`
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

export const SpendingContainer = styled.div`
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
    border-bottom: 0;
  }
`;
export const SpendingInfo = styled.div`
  margin: 0 auto;
  @media (max-width: 765px) {
    text-align: center;
    margin: 0;
  }
`;
