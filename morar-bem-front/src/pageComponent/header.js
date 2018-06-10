import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <html>
      <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />

      </head>
      <div >
        <nav class="navbar navbar-light bg-light justify-content-between header">
          <a class="navbar-brand">Navbar</a>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="busca" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Busca</button>
            </form>
          </nav>
      </div>
      </html>
    );
  }
}
export default Header;
