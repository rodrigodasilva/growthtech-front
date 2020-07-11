import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px;
  width: 100%;
`;

export const LoadingContainer = styled.div`
  text-align: center;
  width: 100%;
  padding: 10px;
`;

export const MessageContainer = styled.div`
  text-align: center;
  width: 100%;
  padding: 10px;

  h4 {
    color: var(--secondary-text);
    font-size: 16px;
  }
`;
