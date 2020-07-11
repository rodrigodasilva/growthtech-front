import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { Spinner } from 'react-activity';

import { Container, Header } from './styles';

const PostsFilter = ({ onChange, isLoading }) => {
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
        <h5>Publicações</h5>
        {isLoading && <Spinner size={12} color="#fff" />}
      </Header>

      <input
        placeholder="Buscar pelo post"
        onChange={e => handleChange('search', e.target.value)}
      />
    </Container>
  );
};

PostsFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default PostsFilter;
