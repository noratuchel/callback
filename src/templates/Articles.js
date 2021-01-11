import React from 'react';
import { Grid, Image, Card, Icon, Label, Loader } from 'semantic-ui-react';

import API from '../system/ApiConnector.js';

import Article from './Article';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
    };
  }

  componentDidMount() {
    let comp = this;
    let articles = [];

    API.getBlog(function(blog) {
        API.getArticles(blog.id, function(res) {
          for (let i in res) {
            articles.push(
              <Grid.Column key={res[i].id} style={{marginBottom: "20px"}}>
                <Article
                  article={res[i].id}
                  title={res[i].title}
                  author={res[i].author.displayName}
                  date={res[i].published}
                  content={res[i].content}
                  comments={res[i].replies.totalItems}
                  tags={res[i].labels}
                />
              </Grid.Column>
            );
          }

          comp.setState({
            articles: articles,
            loading: false,
          });
        });
    });
  }

  render() {
    return (
      <Grid doubling columns={2} divided>
        <Loader active={this.state.loading} />

        <Grid.Row>
          {this.state.articles}
        </Grid.Row>
      </Grid>
    );
  }
}

export default Articles;
