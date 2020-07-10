import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import { FaAngleDoubleUp } from 'react-icons/fa';

import { Container } from './styles';

export default function BackToTop() {
  return (
    <Container>
      <ScrollUpButton
        ContainerClassName="button-container"
        TransitionClassName="button-transition"
      >
        <FaAngleDoubleUp color="#fff" size={20} />
      </ScrollUpButton>
    </Container>
  );
}
