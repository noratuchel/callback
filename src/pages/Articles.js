import React from 'react';
import MagicButton from '../templates/MagicButton';

class Articles extends React.Component {
  createTable() {
    let table = [];

    for (let i = 0; i < 10; i++) {
      let children = [];
      table.push(
        <MagicButton name={"Max " + i}/>
      );
    }

    return table;
  }

  render() {
    return (
      <table>
        {this.createTable()}
      </table>
    );
  }
}

export default Articles;
