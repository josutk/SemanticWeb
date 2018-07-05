import React, { Component } from 'react';

import PageHeader from '../components/utils/Header/PageHeader'
import PageFooter from '../components/utils/Footer/PageFooter'
import Offers from '../components/offers/Offers'

export default class OffersPage extends Component{
    render(){
        return (
            <div className="offers-page">
                <PageHeader />
                <div className="content text-center">
                    <h3>Ofertas</h3>
                    <h1>Confira as ofertas ativas</h1>
                    <Offers />
                </div>
                <PageFooter />
            </div>
        )
    }
}
