import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { Spinner } from 'react-activity';

import { Container, Header } from './styles';

const DidNumbersFilters = ({ onChange, isLoading }) => {
  const handleSearchWithDebounce = useRef(
    debounce(filter => {
      onChange(filter);
    }, 500)
  ).current;

  const handleChange = (key, value) => {
    handleSearchWithDebounce({ [key]: value });
  };

  return (
    <Container>
      <Header>
        <h5>Filtrar por:</h5>
        {isLoading && <Spinner size={12} color="#fff" />}
      </Header>

      <fieldset>
        <legend>Usuário</legend>
        <input
          placeholder="Ex: Ervin Howell"
          onChange={e => handleChange('name', e.target.value)}
        />
      </fieldset>

      <fieldset>
        <legend>CEP</legend>
        <input
          placeholder="Ex: 53919-4257"
          onChange={e => handleChange('zipcode', e.target.value)}
        />
      </fieldset>

      <fieldset>
        <legend>Empresa</legend>
        <input
          placeholder="Ex: Romaguera-Crona"
          onChange={e => handleChange('company_name', e.target.value)}
        />
      </fieldset>
    </Container>
  );
};

DidNumbersFilters.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default DidNumbersFilters;
