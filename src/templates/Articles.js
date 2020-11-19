import React from 'react';
import { Grid, Image, Card, Icon, Label, Loader } from 'semantic-ui-react';

import API from '../system/ApiConnector.js';

class Article extends React.Component {
  render() {
    let tags = [];

    if (this.props.tags) {
      tags = this.props.tags;
    }

    return (
      <Card style={{ width: '100%' }}>
        {/*<Image src='https://bilder.t-online.de/b/88/89/06/94/id_88890694/920/tid_da/donald-trump-will-den-wahrscheinlichen-wahlsieg-von-joe-biden-nicht-akzeptieren-der-us-praesident-spricht-von-wahlbetrug-.jpg' wrapped ui={false} />
        */}<Card.Content>
          <Card.Header as="a" href={"/article/" + this.props.article}>{this.props.title}</Card.Header>
          <Card.Meta>{new Date(this.props.date).toLocaleDateString("de-DE")}</Card.Meta>
          <Card.Description>

            {tags.map(function(tag){
              return <Label key={tag}><Icon name='hashtag' />{tag}</Label>
            })}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a style={{float: "left"}}>
            <Icon name='user' />
            {this.props.author}
          </a>

          <span style={{float: "right"}}>
            <Icon name='comments' />
            {this.props.comments}
          </span>

          {/* <Button style={{float: "right"}}>Lesen</Button> */}
        </Card.Content>
      </Card>
    )
  }
}

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
            console.log(res[i]);
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
