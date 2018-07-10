import React, { Component } from 'react';
import shortid from 'shortid';
import { Link } from 'react-router-dom';

class Render extends Component{
  constructor(props) {
      super(props);
      this.state = {results: null}

  }

  offers(offers){
      var result = [];
      for (var offer of offers) {
          var home = offer.home.value.split("/");
          home = home[home.length -1];

          var key = shortid.generate();
          result.push(
              <div key={key}>
                  <h1>{offer.title.value}</h1>
                  <p>Apenas {offer.price.value} - {offer.currency.value}</p>
                  <Link to={{ pathname: '/offer/'+ home, state:{offer:offer}  }}>
                      <img src={offer.thumbnail.value} alt="home-thumbnail"/>
                  </Link>
              </div>
          );
      }

      return (<div>{result}</div>);
  }

  rooms(rooms){
      var result = [];
      for (var room of rooms) {
          var type  = room.type.value.split("/");
          type = type[type.length -1];

          var key = shortid.generate();
          result.push(
              <div key={key}>
                  <p>Tipo: {type}</p>
                  <p>Quantidade: {room.name.value}</p>
              </div>
          );
      }

      return (<div>
                  <h4>Cômodos</h4>
                  {result}
              </div>);
  }

  health_point(health_point){

      return "health_point";
  }


}
export default Render;
