import { Component } from 'react';

class RenderUtils extends Component {
  constructor(props) {
      super(props);

    this.getTypes = this.getTypes.bind(this);
    this.renderExternalIndicators = this.renderExternalIndicators.bind(this);
  }

  getTypes(indicators){
      console.log(indicators);
      for (var indicator of indicators) {
          console.log(indicator);
      }
      return "test";
  }

  renderExternalIndicators(indicators){
      var types = this.getTypes(indicators);

      return (<div></div>);
  }


}
export default RenderUtils;
