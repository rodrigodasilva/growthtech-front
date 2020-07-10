import React from 'react';

import Button from '../Button';

import { Container } from './styles';

const Paginate = ({ currentPage, lastPage, onLoadMore, isLoading }) => {
  return (
    <Container>
      <span>
        {currentPage} de {lastPage}
      </span>
      <Button
        onClick={() => onLoadMore(currentPage + 1)}
        disabled={currentPage === lastPage}
        isLoading={isLoading}
      >
        Carregar mais
      </Button>
    </Container>
  );
};

export default Paginate;
