import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(event) {
        event.preventDefault();
        const searchForm = new FormData(event.target);
        const search_url = "/offers/" + searchForm.get('search')
        this.context.router.history.push(search_url);

    }

    render() {
        return (
            <div className="content" >
                <h3>Imovéis à venda e para alugar</h3>
                <h1>Seu novo endereço está aqui</h1>
                <form onSubmit={this.submitForm}>
                    <input type="text" name="search"/>
                    <button type="submit" className="btn btn">Pesquisar</button>
                </form>
            </div>
        );
    }
}

Home.contextTypes = {
    router: PropTypes.object.isRequired
}
export default Home;
