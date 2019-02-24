import ReactDOM from 'react-dom';
import App from './routes';
import './index.scss';

const routes = App();

ReactDOM.render(routes, document.getElementById('root'));
