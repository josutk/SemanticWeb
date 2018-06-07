import React, { Component } from 'react';
import Header from '../pageComponent/header.js'
import Footer from '../pageComponent/footer.js'


class Home extends Component {
  render() {
    return (

      <div>
        <Header />
            <img src='../assets/casa1.jpeg' alt="image" />
            <img src='../assets/casa2.jpg' alt="image"/>

      <Footer />
      </div>

    );
  }
}
export default Home;
