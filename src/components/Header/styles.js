import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

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

export const MaxWidth = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 50px;

  @media only screen and (max-width: 900px) {
    padding: 0 30px;
  }

  @media only screen and (max-width: 460px) {
    padding: 0 18px;
  }
`;

export const Logo = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin-right: 24px;
  cursor: pointer;
`;

export const ButtonGoBack = styled.button`
  padding: 2px 12px;
  outline: none;
  color: var(--primary-text);
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  svg {
    margin-right: 8px;
  }
`;
