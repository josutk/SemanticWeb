import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import QueryUtils from '../utils/Utils';

class SingleOffer extends Component {
    constructor(props) {
        super(props);
        this.state = {info: null};

        this.makeRequest = this.makeRequest.bind(this);
    }

    makeRequest(){
        var id = this.context.router.route.match.params.id;

        var query_utils = new QueryUtils();
        const query_prefix = query_utils.getPrefixQuery();
        const query_location = query_utils.getLocationQuery(id);

        const query_data =
        query_prefix +
        "SELECT DISTINCT ?home_type ?home_measurement ?location_countryName ?location_stateName ?location_cityName ?location_cep ?location_latitude ?location_longitude"+
        " WHERE {"+
            query_location +
            "onto:ape1 onto:homeMeasurement ?home_measurement."+
            "onto:ape1 rdf:type ?home_type."+
            "?home_type rdfs:subClassOf onto:Home.}"

        const params = new URLSearchParams();
        params.append('query', query_data);
        params.append('output', "json");


        return axios.post('http://localhost:3030/sddss/query', params);
    }

    componentDidMount(){
        const request = this.makeRequest()

        request.then(
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
                    this.setState({info: info})
                }

            }
        )
    }


    render() {
        const info = this.state.info
        const offer = this.context.router.route.location.state.offer
        console.log(offer);

        console.log(this);
        if (info == null) {
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
                </div>
            );
        }
    }
}

SingleOffer.contextTypes = {
    router: PropTypes.object.isRequired
}
export default SingleOffer;
