import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 72px 0px 32px;
  background: var(--bg);
  display: flex;
`;

export const MaxWidth = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 44px;

  @media only screen and (max-width: 900px) {
    padding: 0 24px;
  }

  @media only screen and (max-width: 460px) {
    padding: 0 12px;
  }
`;
