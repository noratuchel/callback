import React from 'react';
import logo from '../logo.png';

import {
  Container,
  Segment,
  List,
  Image
} from 'semantic-ui-react';

function Footer() {
  return (
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Image centered size='tiny' src={logo} />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='/'>
            Startseite
          </List.Item>
          <List.Item as='a' href='/tos'>
            Datenschutz
          </List.Item>
          <List.Item as='a' href='/page/758862531287961967'>
            Über uns
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
}

export default Footer;
