import React from 'react';

import {
  Segment,
  Grid,
  Header,
} from 'semantic-ui-react';

import PageNav from '../templates/PageNav';
import Article from '../templates/Article';
import API from '../system/ApiConnector.js';

class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      searchParam: "",
      searchData: []
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
      searchParam: this.props.match.params.search,
      searchData: []
    });

    this.refreshSearch();
  }

  refreshSearch() {
    let comp = this;
    API.getBlog(function(blog) {
      API.getSearchResults(blog.id, comp.props.match.params.search, function(res) {
        let items = [];

        if (res.items) {
          items = res.items;
        }

        comp.setState({
          loading: false,
          searchParam: comp.state.searchParam,
          searchData: items
        });
      });
    });
  }

  componentDidUpdate() {
    if (this.props.match.params.search !== this.state.searchParam) {
      this.setState({
        loading: true,
        searchParam: this.props.match.params.search,
        searchData: []
      });

      this.refreshSearch();
    }
  }

  render() {
    return (
      <Segment
        textAlign='center'
        style={{ padding: '5em 10em' }}
        vertical
      >
        <Grid doubling columns={1} divided>
          <Grid.Row>
            <Grid.Column textAlign="left" width={4}>
              <PageNav />
            </Grid.Column>

            <Grid.Column textAlign="left" width={12}>
              <Header as='h2' attached='top'>
                Suchergebnisse für '{ this.props.match.params.search }'...
              </Header>

              <Segment loading={this.state.loading} style={{minHeight: "100px"}} attached>
              {this.state.searchData.map((item, index) => (
                <Article key={index}
                  article={item.id}
                  title={item.title}
                  author={item.author.displayName}
                  date={item.published}
                  content={item.content}
                  comments={item.replies.totalItems}
                  tags={item.labels}
                />
              ))}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Search;
