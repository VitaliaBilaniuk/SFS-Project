import ReactDOM from 'react-dom';
import './index.scss';
import React from 'react';
import Header from './components/header/Header';
import Sidepannel from './components/sidepannel/Sidepannel';

const App = () => (
    <div>
        <Header />
        <Sidepannel />
    </div>
);
  
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
