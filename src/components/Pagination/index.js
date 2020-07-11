import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import { Container } from './styles';

const Paginate = ({ currentPage, lastPage, onLoadMore, isLoading }) => {
  return (
    <Container>
      <span>
        {currentPage} de {lastPage}
      </span>

      {currentPage < lastPage && (
        <Button
          onClick={() => onLoadMore(currentPage + 1)}
          disabled={currentPage === lastPage}
          isLoading={isLoading}
        >
          Carregar mais
        </Button>
      )}
    </Container>
  );
};

Paginate.propTypes = {
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Paginate;
