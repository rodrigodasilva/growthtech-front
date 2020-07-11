import React from 'react';
import { Spinner } from 'react-activity';
import PropTypes from 'prop-types';

import { Container, ContainerLoading } from './styles';

const Button = ({ isLoading, children, ...rest }) => {
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

Button.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

Button.defaultProps = {
  isLoading: false,
};

export default Button;
