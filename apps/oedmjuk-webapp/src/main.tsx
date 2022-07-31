import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { LoginView } from '@oedmjuk/oedmjuk-ui';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }`


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <GlobalStyle />
    <LoginView />
  </StrictMode>
);
