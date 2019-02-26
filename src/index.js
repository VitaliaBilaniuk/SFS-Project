import ReactDOM from 'react-dom';
import './index.scss';
import React from 'react';
import Header from './intro/Header';
import Sidepannel from './intro/Sidepannel';

const App = () => (
    <div>
        <Header />
        <Sidepannel />
    </div>
);
  
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
