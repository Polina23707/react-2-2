import React from "react";
import products from './Products';
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import CardsView from "./CardsView";
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
      <div>
        <div>
          <IconSwitch icon={this.state.view} onSwitch={this.onSwitch}/>
        </div>
        <div>
          <View view={this.state.view} products={this.products}/>
        </div>
      </div>
    )
  }
}

export default Store;