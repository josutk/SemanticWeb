import React, { Component } from 'react';

import PageHeader from '../components/utils/Header/PageHeader'
import PageFooter from '../components/utils/Footer/PageFooter'
import SingleOffer from '../components/offers/SingleOffer'

export default class SingleOfferPage extends Component{
    render(){
        return (
            <div className="offers-page">
                <PageHeader />
                <div className="content text-center">
                    <SingleOffer />
                </div>
                <PageFooter />
            </div>
        )
    }
}
