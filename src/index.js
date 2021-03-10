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
import GlobalStyle from './utils/globalStyles.js';
import { SfsMainWrapper } from './styles.js';

const store = configureStore();
const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <div>
      <Header />
      <SfsMainWrapper>
        <SidePanel />
        <Tabs />
      </SfsMainWrapper>
    </div>
  </Router>
);

export default App;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root'),
);
