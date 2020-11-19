import React from 'react';

import {
  Segment,
  Grid,
  Header,
  Image,
  Icon,
  Card,
  Comment,
  Label,
} from 'semantic-ui-react';

import API from '../system/ApiConnector.js';

import PageNav from '../templates/PageNav';

class CommentItem extends React.Component {
  render() {
    return (
      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>{this.props.author}</Comment.Author>
          <Comment.Metadata>
            <div>{new Date(this.props.date).toLocaleTimeString("de-DE") + ", " + new Date(this.props.date).toLocaleDateString("de-DE")}</div>
          </Comment.Metadata>
          <Comment.Text>{this.props.content}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Löschen</Comment.Action>
          </Comment.Actions>
        </Comment.Content>

        {this.props.replies.length > 0 && (
          <Comment.Group>
            {this.props.replies.map(function(reply){
              return <CommentItem key={reply.id} author={reply.author.displayName} content={reply.content} date={reply.published} image={reply.author.image.url} replies={reply.replies} />
            })}
          </Comment.Group>
        )}
      </Comment>
    );
  }
}

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      article: {},
      comments: [],
      commentsTotal: 0,
    };
  }

  componentDidMount() {
    let comp = this;
    API.getBlog(function(blog) {
      API.getArticle(blog.id, comp.props.match.params.article, function(res) {
        API.getComments(blog.id, res.id, function(comments) {
          if (!comments) {
            comments = [];
          }

          let total = comments.length;
          let commentsSorted = {};

          for (let i in comments) {
            comments[i].replies = [];

            if (!comments[i].inReplyTo) {
              commentsSorted[comments[i].id] = comments[i];
              // commentsSorted[comments[i].id].replies = [];
            }
          }

          for (let i in comments) {
            if (comments[i].inReplyTo) {
              commentsSorted[comments[i].inReplyTo.id].replies.push(comments[i]);
            }
          }

          comments = [];

          for (let i in commentsSorted) {
            comments.push(commentsSorted[i]);
          }

          comp.setState({
            loading: false,
            article: res,
            comments: comments,
            commentsTotal: total,
          });
        });
      });
    });
  }

  render() {
    let author = "";
    let date = "";
    let labels = [];

    if (!this.state.loading) {
      author = this.state.article.author.displayName;
      date = new Date(this.state.article.published).toLocaleDateString("de-DE");
      labels = this.state.article.labels;

      if (!labels) {
        labels = [];
      }
    }

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
              <Segment loading={this.state.loading}>

                <Card style={{width: "100%"}}>
                  <Card.Content header={this.state.article.title} />
                  <Card.Content>
                    <Card.Description dangerouslySetInnerHTML={{ __html: this.state.article.content }} />
                    <Card.Description style={{marginTop: "25px"}}>{labels.map(function(tag){
                      return <Label key={tag}><Icon name='hashtag' />{tag}</Label>
                    })}</Card.Description>
                  </Card.Content>

                  <Card.Content extra>
                    <span style={{float: "left"}}>
                      <Icon name='clock' />
                      {date}
                    </span>

                    <span style={{float: "right"}}>
                      <Icon name='user' />
                      {author}
                    </span>
                  </Card.Content>
                </Card>

                <Comment.Group>
                  <Header as='h3' dividing>
                    Kommentare ({this.state.commentsTotal})
                  </Header>

                  {this.state.comments.map(function(comment){
                    return <CommentItem key={comment.id} author={comment.author.displayName} content={comment.content} date={comment.published} image={comment.author.image.url} replies={comment.replies} />
                  })}

                </Comment.Group>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Article;
