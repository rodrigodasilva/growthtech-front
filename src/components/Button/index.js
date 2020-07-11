import React from 'react';
import { Spinner } from 'react-activity';
import PropTypes from 'prop-types';

import { Container, ContainerLoading } from './styles';

const Button = ({ isLoading, disabled, children, ...rest }) => {
  return (
    <Container isLoading={isLoading} disabled={isLoading || disabled} {...rest}>
      {children}

      {isLoading && (
        <ContainerLoading>
          <Spinner size={12} color="#fff" />
        </ContainerLoading>
      )}
    </Container>
  );
};

Button.propTypes = {
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

Button.defaultProps = {
  isLoading: false,
  disabled: false,
};

export default Button;
