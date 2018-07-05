import { Component } from 'react';
import axios from 'axios';

class QueryUtils extends Component {
  constructor(props) {
      super(props);

      this.getPrefixQuery = this.getPrefixQuery.bind(this);
      this.getLocationQuery = this.getLocationQuery.bind(this);
      this.makeRequest = this.makeRequest.bind(this);
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
                                "?location onto:longitude ?location_longitude.";

    return location_query_data
  }

  makeRequest(type, arg){
      var query_data = "";
      var query_location = "";

      const query_prefix = this.getPrefixQuery();

      if (type !== "offer") {
          query_location = this.getLocationQuery(arg);
      }

      switch (type) {
          case "offer":
                query_data =
                    "SELECT DISTINCT ?home_offer_title ?home_offer_thumbnail ?home_offer_price ?home_offer_currency ?home "+
                    "WHERE {"+
                    "?location onto:cityName '"+ arg +"'."+
                    "?place onto:hasLocation ?location."+

                    "?home onto:isLocatedAt ?place."+
                    "?home_offer onto:offers ?home."+

                    "?home_offer onto:homeOfferTitle ?home_offer_title."+
                    "?home_offer onto:homeOfferThumbnail ?home_offer_thumbnail."+
                    "?home_offer onto:homeOfferPrice ?home_offer_price."+
                    "?home_offer onto:homeOfferCurrency ?home_offer_currency }"
                break;

              case "base_info":
                    query_data =
                        "SELECT DISTINCT ?home_type ?home_measurement ?location_countryName ?location_stateName ?location_cityName ?location_cep ?location_latitude ?location_longitude"+
                        " WHERE {"+
                            query_location +
                            "onto:"+ arg +" onto:homeMeasurement ?home_measurement."+
                            "onto:"+ arg +" rdf:type ?home_type."+
                            "?home_type rdfs:subClassOf onto:Home.}"
                break

                case "room_info":
                      query_data =
                        "SELECT DISTINCT * "+
                        "WHERE {"+
                        	"onto:"+ arg +" onto:hasRoom ?home_room."+
                        	"?home_room onto:roomName ?home_room_name}"
                  break

                  case "ext_indicator_info":
                        query_data =
                            "SELECT DISTINCT ?ext_indicator ?ext_indicator_parent_type "+
                            "WHERE {"+
                                "onto:"+ arg +" onto:hasExternalIndicator ?ext_indicator."+
                                "?ext_indicator rdf:type ?ext_indicator_type."+
                                "?ext_indicator_type rdfs:subClassOf ?ext_indicator_parent_type}"
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

      return axios.post('http://localhost:3030/sddss/query', params);
  }

}
export default QueryUtils;
