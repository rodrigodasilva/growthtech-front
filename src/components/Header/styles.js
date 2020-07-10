import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 0px 32px;
  box-shadow: 0 1px 2px var(--shadow-2);
  z-index: 8;
  background: var(--surface-background);
  color: var(--primary-text);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const MaxWidth = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;
