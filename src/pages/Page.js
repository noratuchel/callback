import React from 'react';

import {
  Segment,
  Grid,
  Header,
  Loader,
} from 'semantic-ui-react';

import API from '../system/ApiConnector.js';

import PageNav from '../templates/PageNav';

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      pageData: {
      }
    };
  }

  componentDidMount() {
    let comp = this;
    API.getBlog(function(blog) {
      API.getPage(blog.id, comp.props.match.params.page, function(res) {
        comp.setState({
          loading: false,
          pageData: res
        });
      });
    });
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
                { this.state.pageData.title }
              </Header>

              <Segment loading={this.state.loading} style={{minHeight: "100px"}} attached dangerouslySetInnerHTML={{ __html: this.state.pageData.content }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Page;
