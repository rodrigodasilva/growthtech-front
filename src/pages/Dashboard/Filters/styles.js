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

  @media only screen and (max-width: 900px) {
    width: 100%;
  }

  h5 {
    font-weight: bold;
  }

  fieldset {
    padding: 3px 0;

    + fieldset {
      margin-top: 18px;
    }
  }

  legend {
    font-size: 14px;
    width: auto;
    margin: 0;
  }

  input {
    margin-bottom: 6px;
    font-size: 14px;
    background: var(--comment-background);
    border-radius: 8px;
    padding: 10px;
    color: var(--primary-text);
    border: none;
    outline: none;
    width: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
