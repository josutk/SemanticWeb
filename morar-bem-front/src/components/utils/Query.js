import { Component } from 'react';
import axios from 'axios';

class Query extends Component {
  constructor(props) {
      super(props);

      this.API_URL = 'http://localhost:3030/sddss/query'
      this.mountPrefixQuery = this.mountPrefixQuery.bind(this);
      this.mountLocationQuery = this.mountLocationQuery.bind(this);
      this.mountQuery = this.mountQuery.bind(this);
  }

  mountPrefixQuery(){
    const prefix_query_data = "PREFIX onto: <http://www.semanticweb.org/localespecificationdf/>"+
                              "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>"+
                              "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>";

    return prefix_query_data;
  }

  mountLocationQuery(individual){
    const location_query_data = "onto:"+ individual + " onto:isLocatedAt ?place."+
                                "?place onto:hasLocation ?location."+
                                "?location onto:countryName ?country."+
                                "?location onto:stateName ?state."+
                                "?location onto:cityName ?city."+
                                "?location onto:cep ?cep."+
                                "?location onto:latitude ?latitude."+
                                "?location onto:longitude ?longitude.";

    return location_query_data
  }

  mountQuery(type, arg){
      var query_data = "";
      var query_location = "";

      const query_prefix = this.mountPrefixQuery();

      if (type !== "offer") {
          query_location = this.mountLocationQuery(arg);
      }

      switch (type) {
          case "offer":
                query_data =
                    "SELECT DISTINCT ?title ?thumbnail ?price ?currency ?home "+
                    "WHERE {"+
                    "?location onto:cityName '"+ arg +"'."+
                    "?place onto:hasLocation ?location."+

                    "?home onto:isLocatedAt ?place."+
                    "?home_offer onto:offers ?home."+

                    "?home_offer onto:homeOfferTitle ?title."+
                    "?home_offer onto:homeOfferThumbnail ?thumbnail."+
                    "?home_offer onto:homeOfferPrice ?price."+
                    "?home_offer onto:homeOfferCurrency ?currency }"
                break;

              case "base_info":
                    query_data =
                        "SELECT DISTINCT ?type ?measurement ?country ?state ?city ?cep ?latitude ?longitude"+
                        " WHERE {"+
                            query_location +
                            "onto:"+ arg +" onto:homeMeasurement ?measurement."+
                            "onto:"+ arg +" rdf:type ?type."+
                            "?type rdfs:subClassOf onto:Home.}"
                break

                case "room_info":
                      query_data =
                        "SELECT DISTINCT * "+
                        "WHERE {"+
                        	"onto:"+ arg +" onto:hasRoom ?type."+
                        	"?type onto:roomName ?name}"
                  break

                  case "indicators_info":
                        query_data =
                            "SELECT DISTINCT ?name ?type "+
                            "WHERE {"+
                                "onto:"+ arg +" onto:hasExternalIndicator ?name."+
                                "?name rdf:type ?aux_type."+
                                "?aux_type rdfs:subClassOf ?type}"
                    break

                    case "RecreationPoint":
                          query_data =
                            "SELECT DISTINCT ?recreation_point_rating ?recreation_point_name ?location_countryName ?location_stateName ?location_cityName ?location_cep ?location_latitude ?location_longitude "+
                            "WHERE {"+
                                query_location +
                                "onto:"+ arg +" onto:recreationPointRating ?recreation_point_rating."+
                                "onto:" + arg +" onto:recreationPointName ?recreation_point_name.}"
                      break

                      case "HealthPoint":
                            query_data =
                              "SELECT DISTINCT ?health_point_rating ?health_point_name ?location_countryName ?location_stateName ?location_cityName ?location_cep ?location_latitude ?location_longitude "+
                              "WHERE {"+
                                  query_location +
                                  "onto:"+ arg +" onto:healthPointRating ?health_point_rating."+
                                  "onto:" + arg +" onto:healthPointName ?health_point_name.}"
                        break

                        case "EducationPoint":
                              query_data =
                                "SELECT DISTINCT ?education_point_name ?education_point_type ?education_point_course ?education_point_shift ?location_countryName ?location_stateName ?location_cityName ?location_cep ?location_latitude ?location_longitude "+
                                "WHERE {"+
                                    query_location +
                                    "onto:"+ arg +" onto:educationPointName ?education_point_name."+
                                    "onto:"+ arg +" onto:educationPointType ?education_point_type."+
                                    "onto:"+ arg +" onto:educationPointCourse ?education_point_course."+
                                    "onto:"+ arg +" onto:educationPointShift ?education_point_shift.}"
                          break


                          case "Crime":
                                query_data =
                                    "SELECT DISTINCT ?crime_rate ?crime_rawQuantity ?crime_year ?location_countryName ?location_stateName ?location_cityName ?location_cep ?location_latitude ?location_longitude "+
                                    "WHERE {"+
                                        query_location +
                                        "onto:"+ arg +" onto:crimeRate ?crime_rate."+
                                        "onto:"+ arg +" onto:crimeYear ?crime_year."+
                                        "onto:"+ arg +" onto:crimeRawQuantity ?crime_rawQuantity.}"
                            break

                            case "MobilityPoint":
                                  query_data =
                                  "SELECT DISTINCT ?mobility_description ?location_countryName ?location_stateName ?location_cityName ?location_cep ?location_latitude ?location_longitude "+
                                  "WHERE {"+
                                    query_location +
                                    "onto:busStation1 onto:mobilityPointDescription ?mobility_description.}"
                              break

          default:

      }

      var query = query_prefix + query_data;

      const params = new URLSearchParams();
      params.append('query', query);
      params.append('output', "json");

      return axios.post(this.API_URL, params);
  }

}
export default Query;
