import Articles from '../templates/Articles';
import PageNav from '../templates/PageNav';

import {
  Segment,
  Grid,
} from 'semantic-ui-react';

function Home() {
  return (
    <Segment
      textAlign='center'
      style={{ padding: '5em 10em' }}
      vertical
    >
      <Grid doubling columns={2} divided>
        <Grid.Row>
          <Grid.Column textAlign="left" width={4}>
            <PageNav />
          </Grid.Column>

          <Grid.Column width={12} textAlign="left">
            <Articles />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default Home;
