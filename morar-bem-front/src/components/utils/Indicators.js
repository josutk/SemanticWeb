import React, { Component } from 'react';
import shortid from 'shortid';
import { Link } from 'react-router-dom';
import Query from './Query';
import Render from './Render';

class Indicators extends Component{
  constructor(props) {
      super(props);
      this.state = {data: null}

      this._render = new Render();
      this.query = new Query();
  }

  componentDidMount(){
      console.log("qwer", this.props.name);
  }

  test(){
      console.log("uat", this.props.name);
  }

  render(){
      return "ora";
  }
  // display(indicator){
  //
  //     var type = indicator.type.value.split("/")
  //     type = type[type.length -1];
  //
  //     var name = indicator.name.value.split("/")
  //     name = name[name.length -1];
  //
  //     const request = this.query.mountQuery(type, name);
  //
  //     request.then(
  //         response => {
  //             // this.setState({data: response.data.results.bindings})
  //         }
  //     );
  //
  //   return "asdf";
  // }

}
export default Indicators;
