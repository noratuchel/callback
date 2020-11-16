import React from 'react';

import API from '../system/ApiConnector.js';

import {
  Segment,
  List,
  Button,
  Icon,
  Loader,
  Header,
} from 'semantic-ui-react';

class PageItem extends React.Component {
  render() {
    return (
      <List.Item as="a" href={"/page/" + this.props.page} page={ this.props.page } key={ this.props.page }>
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
      loading: true,
      pages: []
    };
  }

  componentDidMount() {
    let obj = this;

    API.getBlog(function(res) {
      API.getPages(res.id, function(pages) {
        for (let i in pages.items) {
          let el = pages.items[i];
          obj.createItem(el.title, el.id);
        }
      })
    });
  }

  createItem(item, id) {
    let pages = this.state.pages;
    pages.push(<PageItem name={item} page={id} key={id} />);

    this.setState({
      loading: false,
      pages: pages
    });
  }

  render() {
    return (
      <div>
        <Segment inverted style={{minHeight: "0"}}>
          <Header as='h3'>Unterseiten</Header>
          <Loader size="small" active={this.state.loading}/>
          <List divided inverted relaxed>
            { this.state.pages }
          </List>
        </Segment>

        <Button style={{width:"100%"}} color='grey' inverted={true}>
          <Icon name='add' /> Post erstellen
        </Button>
      </div>
    );
  }
}

export default PageNav;
