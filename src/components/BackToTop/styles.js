import styled from 'styled-components';

export const Container = styled.div`
  .button-container {
    position: fixed;
    right: -100px;
    bottom: 50px;
    transition: right 0.5s;
    cursor: pointer;
    background-color: var(--primary-button-background);
    padding: 15px;
    border-radius: 50%;
    box-shadow: 0 0px 2px 1px rgba(0, 0, 0, 0.16),
      0px 2px 8px 0px rgba(0, 0, 0, 0.12);
    width: 50px;
    height: 50px;
    outline: none;
  }

  .button-transition {
    right: 20px;
  }
`;
