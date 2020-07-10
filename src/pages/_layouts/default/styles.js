import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 72px 32px 32px;
  background: var(--bg);
  display: flex;

  @media only screen and (max-width: 900px) {
    padding: 72px 12px 32px;
  }
`;

export const MaxWidth = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;
