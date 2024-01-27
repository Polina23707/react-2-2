import React from "react";
import products from './Products';
import IconSwitch from "./IconSwitch";
import View from "./View";

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.products = products;
    this.state = {
      view: "view_list"
    }
    this.onSwitch = this.onSwitch.bind(this);
  }

  onSwitch() {
    if (this.state.view === "view_list") {
      this.setState({view: "view_module"});
    } else {
      this.setState({view: "view_list"});
    }
  }

  render() {
    return(
      <div className="main">
        <div className="header">
          <IconSwitch icon={this.state.view} onSwitch={this.onSwitch}/>
        </div>
        <div className="content">
          <View view={this.state.view} products={this.products}/>
        </div>
      </div>
    )
  }
}

export default Store;