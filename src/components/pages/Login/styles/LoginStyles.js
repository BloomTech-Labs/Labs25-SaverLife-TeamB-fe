import styled from 'styled-components';

export const LoginHolder = styled.div`
  margin: 0;
  background: url('https://images.unsplash.com/photo-1538356111053-748a48e1acb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80');
  background-size: cover;
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  overflow-x: hidden;

  @media (min-width: 600px) and (max-width: 800px) {
    height: 100vh;
    background-position: 80% 5%;
    background-size: cover;
  }
`;
