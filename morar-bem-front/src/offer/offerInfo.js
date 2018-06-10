import React, { Component } from 'react';
import './offerInfo.css'

class OffersInfo extends Component {
  render() {
    return (
      <div>
       <div class="card-infos">
         <div class="card-header">
           <font color="#3AC7DF">Informações da região</font>
          </div>
         <ul class="list-group list-group-flush">
           <li class="list-group-item"><font color="#3AC7DF">Escolas</font></li>
           <li class="list-group-item"><font color="#3AC7DF">Segurança</font></li>
           <li class="list-group-item"><font color="#3AC7DF">Saúde</font></li>
         </ul>
        </div>
       </div>

    );
  }
}
export default OffersInfo;
