import React, { Component } from 'react';
import './pageOffer.css'
import Header from '../../pageComponent/header'
import OffersComponent from '../../offer/offerComponent'

class PageOffer extends Component {
  render() {
    return (
      <div>
        <Header />
        <OffersComponent/>
      </div>

    );
  }
}
export default PageOffer;
