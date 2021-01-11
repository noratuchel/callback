import React from 'react';

import API from '../system/ApiConnector.js';
import {withRouter} from 'react-router-dom';

import {
  Input
} from 'semantic-ui-react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }

  onSearch(e) {
    if (e.key === 'Enter') {
      this.props.history.push('/search/' + this.state.search);
    }
  };

  onChange(e) {
    this.setState({
      search: e.target.value
    });
  }

  render() {
    return (
      <Input
        inverted
        icon="search"
        placeholder="Suche..."
        style={{ marginRight: "30px" }}
        onKeyDown={this.onSearch.bind(this)}
        onChange={this.onChange.bind(this)}
      />
    );
  }
}

export default withRouter(SearchBar);
