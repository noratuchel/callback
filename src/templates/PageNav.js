import React from 'react';

import {
  Segment,
  List,
  Button,
  Icon
} from 'semantic-ui-react';

class PageItem extends React.Component {
  render() {
    return (
      <List.Item as="a">
        <List.Content>
          <List.Header>{ this.props.name }</List.Header>
        </List.Content>
      </List.Item>
    );
  }
}

class PageNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: []
    };

    this.createItem("Home");
    this.createItem("Community");
    this.createItem("FAQ");
    this.createItem("Help");
  }

  createItem(item) {
    let pages = this.state.pages;
    pages.push(<PageItem name={item} />);
    this.setState({
      pages: pages
    });
  }

  render() {
    return (
      <div>
        <Segment inverted>
          <List divided inverted relaxed>
            { this.state.pages }
          </List>
        </Segment>

        <Button style={{width:"100%"}} color='grey' inverted>
          <Icon name='add' /> Post erstellen
        </Button>
      </div>
    );
  }
}

export default PageNav;
