import React, { Component } from 'react';
import QueryUtils from '../utils/Utils';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Offers extends Component {
    constructor(props) {
        super(props);
        this.state = {offers: null};

        this.renderOffers = this.renderOffers.bind(this);
    }

    componentDidMount(){
        var query_utils = new QueryUtils();
        var location = this.context.router.route.match.params.location;
        location = location.replace(/^"(.*)"$/, '$1');
        const request = query_utils.makeRequest("offer", location)
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
