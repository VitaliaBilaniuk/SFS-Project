import ReactDOM from 'react-dom';
import './index.scss';
import React from 'react';
import Intro from './intro';

const App = () => (
    <div>
        <Intro />
    </div>
);
  
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
