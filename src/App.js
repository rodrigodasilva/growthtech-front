import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';

import ButtonBackToTop from './components/BackToTop';

import GlobalStyle from './styles/global';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <Routes />
        <ButtonBackToTop />
        <GlobalStyle />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
