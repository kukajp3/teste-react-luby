import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './hooks/user';
import Routes from './routes';

import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <UserProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserProvider>
    <GlobalStyles />
  </>
);

export default App;
