import React, { Component } from 'react';
import axios from 'axios';
import QueryUtils from '../utils/Utils';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Offers extends Component {
    constructor(props) {
        super(props);
        this.state = {offers: null};

        this.makeRequest = this.makeRequest.bind(this);
        this.renderOffers = this.renderOffers.bind(this);
    }

    makeRequest(){
        var location = this.context.router.route.match.params.location;
        location = location.replace(/^"(.*)"$/, '$1');

        var query_utils = new QueryUtils();
        const query_prefix = query_utils.getPrefixQuery();

        const query_data =
        query_prefix +
        "SELECT DISTINCT ?home_offer_title ?home_offer_thumbnail ?home_offer_price ?home_offer_currency ?home "+
        "WHERE {"+
        	"?location onto:cityName '"+ location +"'."+
          "?place onto:hasLocation ?location."+

        	"?home onto:isLocatedAt ?place."+
        	"?home_offer onto:offers ?home."+

          "?home_offer onto:homeOfferTitle ?home_offer_title."+
          "?home_offer onto:homeOfferThumbnail ?home_offer_thumbnail."+
          "?home_offer onto:homeOfferPrice ?home_offer_price."+
          "?home_offer onto:homeOfferCurrency ?home_offer_currency }"


        const params = new URLSearchParams();
        params.append('query', query_data);
        params.append('output', "json");


        return axios.post('http://localhost:3030/sddss/query', params);
    }

    componentDidMount(){
        const request = this.makeRequest()
        var offers = []

        request.then(
            response => {
                for (var data of response.data.results.bindings) {
                    var offer = {
                        title: data.home_offer_title.value,
                        thumbnail: data.home_offer_thumbnail.value,
                        price: data.home_offer_price.value,
                        currency: data.home_offer_currency.value,
                        home:data.home.value
                    }

                    offers.push(offer)
                }
                this.setState({offers: offers})
            }
        )
    }

    renderOffers(offers){
        var result = [];
        for (var offer of offers) {
            var home = offer.home.split("/");
            home = home[home.length -1];

            var key = shortid.generate()
            result.push(
                <div key={key}>
                    <h1>{offer.title}</h1>
                    <p>Apenas {offer.price} - {offer.currency}</p>
                    <Link to={{ pathname: '/offer/'+ home, state:{offer:offer}  }}>
                        <img src={offer.thumbnail} alt="home-thumbnail"/>
                    </Link>
                </div>
                )

        }

        return (<div>{result}</div>)
    }

    render() {
        const offers = this.state.offers

        if (offers == null) {
            return null;
        } else {
            return (
                <div>
                    {this.renderOffers(offers)}
                </div>
            );
        }
    }
}

Offers.contextTypes = {
    router: PropTypes.object.isRequired
}
export default Offers;
