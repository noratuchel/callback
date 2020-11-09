import React from 'react';

class MagicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {render: true};
  }

  deleteMe() {
    this.setState({render: false});
  }

  render() {
    if (this.state.render) {
      return (
        <tr>
          <td>{this.props.name}</td>
          <td>
            <button onClick={(e) => this.deleteMe(e)}>Delete me</button>
          </td>
        </tr>
      )
    }

    return null;
  }
}

export default MagicButton;
