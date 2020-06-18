import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import configureStore from './store/index.js';

import Header from './components/header/Header';
import SidePanel from './components/SidePanel';
import Tabs from './components/Tabs/Tabs';

import './index.scss';

const store = configureStore();
const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <div>
      <Header />
      <div className="D(f)">
        <SidePanel />
        <Tabs />
      </div>
    </div>
  </Router>
);

export default App;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
