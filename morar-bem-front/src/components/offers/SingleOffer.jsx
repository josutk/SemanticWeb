import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QueryUtils from '../utils/Utils';
import RenderUtils from '../utils/RenderUtils';

class SingleOffer extends Component {
    constructor(props) {
        super(props);
        this.state = {base_info: null,
                      room_info: null,
                      ext_indicator: null
                    };

    }

    componentDidMount(){
        var query_utils = new QueryUtils();
        var id = this.context.router.route.match.params.id;
        const base_request = query_utils.makeRequest("base_info", id)
        const room_request = query_utils.makeRequest("room_info", id)
        const ext_indicator_request = query_utils.makeRequest("ext_indicator_info", id)

        //Get base infos
        base_request.then(
            response => {
                for (var data of response.data.results.bindings) {
                    var type = data.home_type.value.split("/");
                    type = type[type.length -1];

                    var info = {
                        type: type,
                        measurement: data.home_measurement.value,
                        country: data.location_countryName.value,
                        state: data.location_stateName.value,
                        city: data.location_cityName.value,
                        cep: data.location_cep.value,
                        latitude: data.location_latitude.value,
                        longitude: data.location_longitude.value

                    }
                    this.setState({base_info: info})
                }
            }
        )

        //Get room infos
        var rooms = []
        room_request.then(
            response => {
                for (var data of response.data.results.bindings) {
                    var room = {
                        name: data.home_room_name.value
                    }
                    rooms.push(room)
                }
                this.setState({room_info: rooms})
            }
        )

        //Get external indicators infos
        var ext_indicators = []
        ext_indicator_request.then(
            response => {
                for (var data of response.data.results.bindings) {
                    var type = data.ext_indicator_parent_type.value.split("/");
                    type = type[type.length -1];

                    var name = data.ext_indicator.value.split("/");
                    name = name[name.length -1];

                    var ext_indicator = {
                        type: type,
                        name: name
                    }
                    ext_indicators.push(ext_indicator)
                }
                this.setState({ext_indicator: ext_indicators});
            }
        );
    }

    render() {
        const info = this.state.base_info;
        const room = this.state.room_info;
        const ext_indicators = this.state.ext_indicator;
        const offer = this.context.router.route.location.state.offer;
        var render_utils = new RenderUtils();

        if (info == null || ext_indicators == null) {
            return null;
        } else {
            return (
                <div>
                    <h1>{offer.title}</h1>
                    <p>Apenas {offer.price} - {offer.currency}</p>
                    <img src={offer.thumbnail} alt="home-thumbnail"/>

                    <h3>Tipo:{info.type}</h3>
                    <h3>Tamanho:{info.measurement} m²</h3>
                    <h3>{info.city} - {info.state}</h3>
                    <h3>Coordenadas:{info.latitude}, {info.longitude}</h3>

                    {render_utils.renderExternalIndicators(ext_indicators)}
                </div>
            );
        }
    }
}

SingleOffer.contextTypes = {
    router: PropTypes.object.isRequired
}
export default SingleOffer;
