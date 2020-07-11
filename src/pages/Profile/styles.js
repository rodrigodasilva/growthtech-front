import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 820px) {
    flex-wrap: wrap;
  }
`;

export const ProfileInfo = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;
  margin: 0 6px 12px;
  background: var(--surface-background);
  color: var(--primary-text);
  box-shadow: 0 1px 2px var(--shadow-2);

  height: max-content;
  width: 40%;

  @media only screen and (max-width: 820px) {
    width: 100%;
  }

  h2 {
    font-size: 22px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 22px;
  }

  p {
    font-size: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;

    span {
      margin: 0 8px;
    }

    strong {
      word-break: break-word;
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
