import React from 'react';
import logo from '../logo.png';

import {
  Button,
  Container,
  Segment,
  Grid,
  Visibility,
  Header,
  List,
  Divider,
  Image
} from 'semantic-ui-react';

function Footer() {
  return (
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Image centered size='tiny' src={logo} />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
}

export default Footer;
