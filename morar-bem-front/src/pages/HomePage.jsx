import React, { Component } from 'react';

import PageHeader from '../components/utils/Header/PageHeader'
import PageFooter from '../components/utils/Footer/PageFooter'

import '../assets/static/css/HomePage.css'

export default class HomePage extends Component{
    render(){
        return (
            <div className="home-page">
                <PageHeader />
                <div className="content">
                    <h3>Imovéis à venda e para alugar</h3>
                    <h1>Seu novo endereço está aqui</h1>
                    <form>
                        <input type="text" name="search"/>
                        <button type="submit" className="btn btn">Pesquisar</button>
                    </form>
                </div>
                <PageFooter />
            </div>
        )
    }
}
