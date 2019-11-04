import ReactDOM from 'react-dom';
import './index.scss';
import React from 'react';
import Header from './components/header/Header';
import SidePannel from './components/side-pannel/SidePannel';
import Tabs from './components/tabs/Tabs';
import Global from './components/params/Global';

const App = () => (
    <div>
        <Header />
        <div className="sfs-row">
            <SidePannel />
            <Tabs Global={Global}/>
        </div>
    </div>
);
  
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
