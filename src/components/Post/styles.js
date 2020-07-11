import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--surface-background);
  border-radius: 10px;
  box-shadow: 0 1px 2px var(--shadow-2);
  margin-bottom: 12px;
  padding: 20px;
`;

export const User = styled.header`
  display: flex;
  flex-direction: column;

  a {
    color: var(--primary-text);
    font-size: 16px;
    margin-bottom: 4px;
    width: max-content;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  span {
    color: var(--secondary-text);
    font-size: 14px;
    margin-bottom: 3px;
    max-width: max-content;

    display: flex;
    align-items: center;

    svg {
      margin-right: 4px;
    }
  }
`;

export const Post = styled.section`
  color: var(--primary-text);
  font-size: 16px;
  margin: 16px 0;

  h5 {
    word-break: break-word;
    font-weight: bold;
    margin-bottom: 4px;
  }
`;

export const CommentsButton = styled.footer`
  color: var(--secondary-text);
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  padding: 6px 0;
  width: max-content;
  display: flex;
  align-items: center;

  :hover {
    opacity: 0.8;
  }

  span {
    margin: 0 8px;
  }
`;
