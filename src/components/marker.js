import React from "react";
import "./marker.css"
import symbol from "../services/symbol.js"
class Marker extends React.Component {

  render() {

    let classes = "marker"
    if (this.props.selected) {
      classes += " selected"
    }

    return (
      <div className={classes}>
        {symbol(this.props.currency)}{this.props.text}
      </div>
    );
  }
}

export default Marker;
