import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";

import styles from "styles/item";

class Item extends React.Component {
  static propTypes = {
    itemId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }
  render() {
    const { name, itemId } = this.props;
    return (
      <div>
        <Card className={styles.card}>
          name: {name} <br/>
          itemId: {itemId}<br/>
        </Card>
      </div>
    );
  }
}
export default Item;