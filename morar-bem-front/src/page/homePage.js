import React, { Component } from 'react';
import Header from '../pageComponent/header.js'
import Footer from '../pageComponent/footer.js'
import './homePage.css'

class Home extends Component {
  render() {
    return (

      <div>
        <Header />
            <img src='../assets/casa1.jpeg' alt="image" />
            <img src='../assets/casa2.jpg' alt="image"/>
            <div id="search-button">
              <button type="button" class="btn btn-success">Buscar Local</button>

            </div>
      <Footer />
      </div>

    );
  }
}
export default Home;
