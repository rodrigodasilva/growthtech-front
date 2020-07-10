import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--surface-background);
  border-radius: 10px;
  box-shadow: 0 1px 2px var(--shadow-2);
  margin-bottom: 24px;
  padding: 20px;
`;

export const User = styled.header`
  display: flex;
  flex-direction: column;

  h4 {
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

export const Comments = styled.footer`
  color: var(--secondary-text);
  padding: 6px 20px;
  font-size: 16px;
  cursor: pointer;

  :hover {
    background: var(--hover-overlay);
    border-radius: 4px;
    transition: 400ms cubic-bezier(0.08, 0.52, 0.52, 1) transform;
  }

  svg {
    margin-right: 4px;
  }
`;
