import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class FirstGraphqlComponent extends React.Component {
    state = {
      input: ""
    }

    onInputChange = e => {
      this.setState({ input: e.target.value });
    }
    render() {
      console.log(this.props);
      return (
        <div>
          <input value={this.state.input} onChange={this.onInputChange}/>
          {this.props.data.itemId}
        </div>
      );
    }

}

export default graphql(gql`
{
    searchItems(searchQuery:"ipad") {
          name
    }
}
`)(FirstGraphqlComponent);