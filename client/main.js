import React from 'react';
import { hydrate } from 'react-dom';

import App from './App';

if (module['hot']) {
  module['hot'].accept();
}

hydrate(<App />, document.getElementById('root'));
