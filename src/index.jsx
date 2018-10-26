import React from 'react';
import { render } from 'react-dom';
import TestComponent from './testcomponent';

render(
  <TestComponent headline="Test Headline" />,
  document.getElementById('react-app'),
);
