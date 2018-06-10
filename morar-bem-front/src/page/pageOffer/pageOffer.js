
import React, { Component } from 'react';
import './pageOffer.css'
import Header from '../../pageComponent/header'
import OffersComponent from '../../offer/offerComponent'
import OffersInfo from '../../offer/offerInfo'
import  Footer from '../../pageComponent/footer'
class PageOffer extends Component {
  render() {
    return (
      <body class="body">
        <div>
        <Header />

        <OffersComponent/>
        <div id="format">
          <OffersInfo />
        </div>
        <OffersComponent/>
        <div id="format">
          <OffersInfo />
        </div>
        <OffersComponent/>
        <div id="format">
          <OffersInfo />
        </div>
        <Footer />
      </div>
    </body>
    );
  }
}
export default PageOffer;
