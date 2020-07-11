import styled from 'styled-components';

export const Container = styled.div`
  background: var(--surface-background);
  border-radius: 10px;
  margin-bottom: 14px;
  padding: 20px;
  box-shadow: 0 1px 2px var(--shadow-2);
  color: var(--primary-text);

  input {
    font-size: 15px;
    background: var(--comment-background);
    border-radius: 24px;
    padding: 10px 14px;
    color: var(--primary-text);
    border: none;
    outline: none;
    width: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;

  h5 {
    font-weight: bold;
    margin-right: 12px;
    font-size: 18px;
  }
`;
