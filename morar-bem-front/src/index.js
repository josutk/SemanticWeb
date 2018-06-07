import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';


const Router = () => (
  <BrowserRouter>
    {routes}
  </BrowserRouter>
);

ReactDOM.render(<Router />, document.getElementById('content'));
registerServiceWorker();
