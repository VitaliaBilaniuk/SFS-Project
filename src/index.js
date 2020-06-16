import ReactDOM from 'react-dom';
import './index.scss';
import React from 'react';
import { Provider } from "react-redux";
import configureStore from "./js/store/index.js";
import Header from './components/header/Header';
import SidePannel from './components/side-pannel/SidePannel';
import Tabs from './components/tabs/Tabs';
import Global from './components/params/Global';
import './atomic/atomic.scss';

const store = configureStore();

const App = () => (
    <div>
        <Header />
        <div className="D(f)">
            <SidePannel />
            <Tabs Global={Global}/>
        </div>
    </div>
);
  
export default App;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);