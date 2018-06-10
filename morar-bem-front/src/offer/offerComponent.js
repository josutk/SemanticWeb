import React, { Component } from 'react';
import './offerComponent.css'
import casa1 from  '../assets/casa1.jpeg'

class OffersComponent extends Component {
  render() {
    return (
      <div className="card" >
          <img class="card-img-top" src={casa1} alt="Card image cap"/>
          <div class="card-body">
          <h5 class="card-title">Valor da casa</h5>
            <p class="card-text">
              Descrição a cerca da casa
            </p>
          </div>
          <a href="#" class="btn btn-primary">Mais informações</a>
       </div>

    );
  }
}
export default OffersComponent;
