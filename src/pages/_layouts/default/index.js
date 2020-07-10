import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';

import { MaxWidth, Container } from './styles';

const DefaultLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <MaxWidth>{children}</MaxWidth>
    </Container>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
