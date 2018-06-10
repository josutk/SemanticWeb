import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './pageComponent/header.js'
import Footer from './pageComponent/footer.js'
import Home from './page/homePage.js'
import registerServiceWorker from './registerServiceWorker';
import OffersComponent from './offer/offerComponent'
import PageOffer from './offer/offerComponent'
ReactDOM.render(<OffersComponent />, document.getElementById('root'));

registerServiceWorker();
