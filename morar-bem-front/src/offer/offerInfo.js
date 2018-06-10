import React, { Component } from 'react';
import './offerInfo.css'

class OffersInfo extends Component {
  render() {
    return (
      <div>
       <div class="card-infos">
         <div class="card-header">
           Informações da região 
         </div>
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Escolas</li>
           <li class="list-group-item">Segurança</li>
           <li class="list-group-item">Saude</li>
         </ul>
        </div>
       </div>

    );
  }
}
export default OffersInfo;
