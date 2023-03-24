import React from "react";
import "./flat.css"
import symbol from "../services/symbol.js"

class Flat extends React.Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat)
  }
  render() {
    const title = `${symbol(this.props.flat.priceCurrency)}${this.props.flat.price} - ${this.props.flat.name}`
    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };
    return (
      <div className="flat" onClick={this.handleClick}>
        <div className="flat-picture" style={style}>

        </div>
        <div className="flat-title">
          {title}
        </div>
      </div>
    );
  }
}

export default Flat;
