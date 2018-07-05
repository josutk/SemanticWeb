import { Component } from 'react';

class QueryUtils extends Component {
  constructor(props) {
      super(props);

      this.getPrefixQuery = this.getPrefixQuery.bind(this);
      this.getLocationQuery = this.getLocationQuery.bind(this);
  }

  getPrefixQuery(){
    const prefix_query_data = "PREFIX onto: <http://www.semanticweb.org/localespecificationdf/>"+
                        "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>"+
                        "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>";

    return prefix_query_data;
  }

  getLocationQuery(individual){
    const location_query_data = "onto:"+ individual + " onto:isLocatedAt ?place."+
                                "?place onto:hasLocation ?location."+
                                "?location onto:countryName ?location_countryName."+
                                "?location onto:stateName ?location_stateName."+
                                "?location onto:cityName ?location_cityName."+
                                "?location onto:cep ?location_cep."+
                                "?location onto:latitude ?location_latitude."+
                                "?location onto:longitude ?location_longitude";

    return location_query_data
  }

}
export default QueryUtils;
