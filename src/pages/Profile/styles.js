import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ProfileInfo = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--surface-background);
  border-radius: 10px;
  box-shadow: 0 1px 2px var(--shadow-2);
  margin: 0 6px;
  padding: 20px;
  height: max-content;
  width: 500px;

  color: var(--primary-text);

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  h3 {
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 22px;
  }

  p {
    font-size: 16px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;

    span {
      margin: 0 8px;
    }
  }
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 6px;
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
