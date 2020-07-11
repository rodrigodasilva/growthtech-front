import styled from 'styled-components';

export const Container = styled.div`
  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    right: -100px;
    bottom: 30px;
    background-color: var(--primary-button-background);
    border-radius: 50%;
    box-shadow: 0 0px 2px 1px rgba(0, 0, 0, 0.16),
      0px 2px 8px 0px rgba(0, 0, 0, 0.12);
    width: 40px;
    height: 40px;
    outline: none;

    cursor: pointer;
    transition: right 0.5s;
  }

  .button-transition {
    right: 20px;
  }
`;
