import React from 'react';
import { render } from 'react-dom';
import Template from './components/Template';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/musiclist.scss';

render(
  <Template />,
  document.getElementById('react-app'),
);
