import ReactDOM from 'react-dom';
import './index.scss';
import React from 'react';
import Header from './components/header/Header';
import SidePannel from './components/side-pannel/SidePannel';

const App = () => (
    <div>
        <Header />
        <SidePannel />
    </div>
);
  
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
