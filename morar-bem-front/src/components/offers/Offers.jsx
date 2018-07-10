import React, { Component } from 'react';
import Query from '../utils/Query';
import PropTypes from 'prop-types';
import Render from '../utils/Render';

class Offers extends Component {
    constructor(props) {
        super(props);
        this.state = {offers: null};

        this.query = new Query();
        this._render = new Render();
    }

    componentDidMount(){
        var location = this.context.router.route.match.params.location;
        location = location.replace(/^"(.*)"$/, '$1');
        const request = this.query.mountQuery("offer", location);

        request.then(
            response => {
                this.setState({offers: response.data.results.bindings});
            }
        );
    }

    render() {
        const offers = this.state.offers;

        if (offers == null) {
            return null;
        } else {
            return (
                <div>
                    {this._render.offers(offers)}
                </div>
            );
        }
    }
}

Offers.contextTypes = {
    router: PropTypes.object.isRequired
}
export default Offers;
