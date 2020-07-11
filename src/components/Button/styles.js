import styled from 'styled-components';

export const Container = styled.button`
  cursor: pointer;
  padding: 10px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  color: ${({ isLoading }) => (isLoading ? 'transparent' : '#fff')};
  background: var(--primary-button-background);
  outline: none;

  position: relative;

  :hover {
    opacity: 0.8;
  }

  :disabled {
    cursor: not-allowed;
  }
`;

export const ContainerLoading = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
