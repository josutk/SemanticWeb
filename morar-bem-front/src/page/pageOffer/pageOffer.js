
import React, { Component } from 'react';
import './pageOffer.css'
import Header from '../../pageComponent/header'
import OffersComponent from '../../offer/offerComponent'
import OffersInfo from '../../offer/offerInfo'

class PageOffer extends Component {
  render() {
    return (
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
      </div>

    );
  }
}
export default PageOffer;
