import React from 'react';
import { Grid, Image, Card, Icon, Button } from 'semantic-ui-react';

class Article extends React.Component {
  render() {
    return (
      <Card style={{ width: '100%' }} inverted="true">
        <Image src='https://bilder.t-online.de/b/88/89/06/94/id_88890694/920/tid_da/donald-trump-will-den-wahrscheinlichen-wahlsieg-von-joe-biden-nicht-akzeptieren-der-us-praesident-spricht-von-wahlbetrug-.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Donald Trump verliert US-Wahlen!</Card.Header>
          <Card.Meta>11:31, 09.11.2020</Card.Meta>
          <Card.Description>
            Nun steht es endgültig fest [...]
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a style={{float: "left"}}>
            <Icon name='user' />
            Max Mustermann
          </a>

          {/* <Button style={{float: "right"}}>Lesen</Button> */}
        </Card.Content>
      </Card>
    )
  }
}

class Articles extends React.Component {
  createTable() {

  }

  render() {
    return (
      <Grid doubling columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Article />
          </Grid.Column>

          <Grid.Column>
            <Article />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Article />
          </Grid.Column>

          <Grid.Column>
            <Article />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Articles;
