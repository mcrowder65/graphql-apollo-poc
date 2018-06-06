import React from "react";
import PropTypes from "prop-types";

class Item extends React.Component {
  static propTypes = {
    itemId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }
  render() {
    const { name, itemId } = this.props;
    return (
      <div>
        name: {name} <br/>
        itemId: {itemId}<br/>
      </div>
    );
  }
}
export default Item;