import React from 'react';
import { Spinner } from 'react-activity';

import { Container, ContainerLoading } from './styles';

const Button = ({ isLoading, color, variant, children, ...rest }) => {
  return (
    <Container isLoading={isLoading} {...rest}>
      {children}

      {isLoading && (
        <ContainerLoading>
          <Spinner size={14} color="#fff" />
        </ContainerLoading>
      )}
    </Container>
  );
};

export default Button;
