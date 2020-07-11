import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { Container, MaxWidth, Logo, ButtonGoBack } from './styles';

const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <MaxWidth>
        <Logo onClick={() => history.push('/')}>GrowthTech</Logo>

        {history.location.pathname !== '/' && (
          <ButtonGoBack onClick={() => history.push('/')}>
            <FaArrowLeft size={16} />
            Voltar
          </ButtonGoBack>
        )}
      </MaxWidth>
    </Container>
  );
};

export default Header;
