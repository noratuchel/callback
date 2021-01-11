import React from 'react';
import { Image, Card, Icon, Label } from 'semantic-ui-react';

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


export default Article;
