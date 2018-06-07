import React, { Component } from 'react';
import Header from '../pageComponent/header.js'
import Footer from '../pageComponent/footer.js'
import './homePage.css'
import casa1 from  '../assets/casa1.jpeg'
import casa2 from '../assets/casa2.jpg'
import casa3 from '../assets/casa3.jpeg'
class Home extends Component {
  render() {
    return (

      <div>
        <Header />
            <img class="offers" src={casa3} alt="image"/>
            <img class="offers" src={casa1} alt="image" />
              <div class="price">
                <b>Cidade:</b> Gama<br/>
                <b>Valor:</b> 200000,00
              </div>
              <div class="price2">
                <b>Cidade:</b> Gama<br/>
                <b>Valor:</b> 300000,00
              </div>
            <div id="search-button">
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button type="button" class="btn btn-success">Buscar Local</button>
             </form>
            </div>

        <Footer />
      </div>

    );
  }
}
export default Home;
