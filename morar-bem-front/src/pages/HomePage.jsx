import React, { Component } from 'react';

import PageHeader from '../components/utils/Header/PageHeader'
import PageFooter from '../components/utils/Footer/PageFooter'
import Home from '../components/home/Home'

import '../assets/static/css/HomePage.css'

export default class HomePage extends Component{
    render(){
        return (
            <div className="home-page">
                <PageHeader />
                <Home />
                <PageFooter />
            </div>
        )
    }
}
