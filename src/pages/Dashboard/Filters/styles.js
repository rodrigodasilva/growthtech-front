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
    border: 2px solid #6c757d;
    background-color: transparent;
    color: #fff;
    border-radius: 4px;
    padding: 4px 6px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
