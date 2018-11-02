import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import TemplateContainer from './components/TemplateContainer';
import Store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/musiclist.scss';

render(
  <Provider store={Store}>
    <TemplateContainer />
  </Provider>,
  document.getElementById('react-app'),
);
