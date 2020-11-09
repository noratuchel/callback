import React, { Component } from 'react';

import logo from '../logo.svg';

import {
  Button,
  Container,
  Image,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';

class Navigation extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item className="logo">
                  <Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" size='tiny' />
                </Menu.Item>
                <Menu.Item as='a' active>
                  Startseite
                </Menu.Item>
                <Menu.Item as='a'>Seiten</Menu.Item>
                <Menu.Item as='a'>User</Menu.Item>
                <Menu.Item as='a'>Hilfe</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Anmelden
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
    )
  }
}

export default Navigation;
