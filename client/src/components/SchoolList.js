import React from 'react';
import { List } from 'semantic-ui-react';
import axios from 'axios';


class SchoolList extends React.Component {
  state = { name: [], conference: [], wins: [], losses: [] };



  render() {
    return (
      <List as='ol'>
        <List.Item as='li'></List.Item>
        <List.Item as='li'></List.Item>
        <List.Item as='li'></List.Item>
        <List.Item as='li'></List.Item>
      </List>

    )
  }
}

export default SchoolList;
