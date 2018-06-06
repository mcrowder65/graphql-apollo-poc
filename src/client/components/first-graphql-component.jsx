import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const QUERY = gql`
  query searchItems($searchQuery: String!) {
    searchItems(searchQuery: $searchQuery) {
      name
      itemId
    }
  }
`;
class FirstGraphqlComponent extends React.Component {
  state = {
    input: "",
  }

  onInputChange = e => {
    this.setState({ input: e.target.value });
  }
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.onInputChange} />
        <br/>
        <Query query={QUERY} variables={{ searchQuery: this.state.input }} skip={!this.state.input}>
          {
            ({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return `Error!: ${error}`;
              return (
                <div>
                  {(data.searchItems || []).map((item, index) => {
                    return (
                      <div key={index}>
                        {item.itemId} {item.name}
                      </div>
                    );
                  }
                  )}
                </div>
              );

            }

          }
        </Query>
      </div>
    );
  }
}

export default FirstGraphqlComponent;
