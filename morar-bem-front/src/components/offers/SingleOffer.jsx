import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Query from '../utils/Query';
import Render from '../utils/Render';
import Indicators from '../utils/Indicators';

class SingleOffer extends Component {
    constructor(props) {
        super(props);
        this.state = {info: null,
                      rooms: null,
                      indicators: null,
                      test: null
                    };

        this.query = new Query();
        this._render = new Render();
    }

    componentDidMount(){

        var id = this.context.router.route.match.params.id;
        const base_request = this.query.mountQuery("base_info", id)
        const room_request = this.query.mountQuery("room_info", id)
        const indicators_request = this.query.mountQuery("indicators_info", id)

        //Get base infos
        base_request.then(
            response => {
                this.setState({info:response.data.results.bindings[0]});
            }
        );

        //Get room infos
        room_request.then(
            response => {
                this.setState({rooms: response.data.results.bindings});
            }
        )

        //Get external indicators infos
        indicators_request.then(
            response => {
                this.setState({indicators: response.data.results.bindings});
            }
        );
    }


    render() {
        const offer = this.context.router.route.location.state.offer;
        const info = this.state.info;
        const rooms = this.state.rooms;
        const indicators = this.state.indicators;


        if (info == null || indicators == null || rooms == null) {
            return null;
        } else {
            var home_type = info.type.value.split("/")
            home_type = home_type[home_type.length -1];

            var indic = new Indicators(indicators[0]);


            return (
                <div>
                    <h1>{offer.title.value}</h1>
                    <p>Apenas {offer.price.value} - {offer.currency.value}</p>
                    <img src={offer.thumbnail.value} alt="home-thumbnail"/>

                    <h3>Tipo:{home_type}</h3>
                    <h3>Tamanho:{info.measurement.value} m²</h3>
                    <h3>{info.city.value} - {info.state.value}</h3>
                    <h3>Coordenadas:{info.latitude.value}, {info.longitude.value}</h3>

                    {this._render.rooms(rooms)}
                    {indic.render()}
                </div>
            );
        }
    }
}

SingleOffer.contextTypes = {
    router: PropTypes.object.isRequired
}
export default SingleOffer;
