import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: max-content;

  background: var(--surface-background);
  border-radius: 10px;
  box-shadow: 0 1px 2px var(--shadow-2);
  margin: 6px;
  padding: 20px;

  color: var(--primary-text);

  h5 {
    font-weight: bold;
  }

  fieldset {
    padding: 3px 0;

    + fieldset {
      margin-top: 12px;
    }

    legend {
      font-size: 14px;
      width: auto;
      margin: 0;
    }

    input {
      font-size: 14px;
      background: var(--comment-background);
      border-radius: 8px;
      padding: 10px;
      color: var(--primary-text);
      border: none;
      outline: none;
      width: 100%;
    }
  }

  @media only screen and (max-width: 745px) {
    width: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;

  font-size: 16px;
`;
