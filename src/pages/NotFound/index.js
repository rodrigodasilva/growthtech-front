import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function NotFound() {
  return (
    <Container>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <Link to="/">Ir para página inicial</Link>
    </Container>
  );
}
