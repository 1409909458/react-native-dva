import React from 'react';
import dva from './utils/dva';
import Router from './routes';

import Home from './models/Home';
import Mine from './models/Mine';
import UserCenter from './models/UserCenter';

const app = dva({
  models: [Home, Mine , UserCenter],
  onError(e) {
    console.log('onError', e);
  },
});

const App = app.start(<Router />);

export default App;
