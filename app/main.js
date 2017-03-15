import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import MainLayout from './layouts/main';

import '../styles/main.less';

const render = Component => {
  ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('root')
  )
}

render(MainLayout);