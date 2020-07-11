import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
`;

export const Comment = styled.section`
  margin-top: 8px;
  background: var(--comment-background);
  color: var(--primary-text);
  padding: 12px 12px;
  border-radius: 18px;
  width: max-content;
`;

export const CommentHeader = styled.header`
  font-size: 14px;
  margin-bottom: 6px;
`;

export const CommentBody = styled.p`
  font-size: 14px;
  line-height: 18px;
`;
