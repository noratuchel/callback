import React, { useContext } from "react";
import { Grid, Segment } from "semantic-ui-react";
import { AuthContext } from "../Auth.js";
import Articles from "../templates/Articles";
import PageNav from "../templates/PageNav";

function Home() {
  const { currentUser } = useContext(AuthContext);

  return (
    <Segment textAlign="center" style={{ padding: "5em 10em" }} vertical>
      <Grid doubling columns={2} divided>
        <Grid.Row>
          <Grid.Column textAlign="left" width={4}>
            <PageNav currentUser={currentUser} />
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
