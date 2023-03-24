import React from "react";
import "./marker.css"

class Marker extends React.Component {

  render() {
    const symbol = (currency) => {
      if (currency === 'EUR') {
        return '€'
      } else {
        return '$'
      }
    }
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
