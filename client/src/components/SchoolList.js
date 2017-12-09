import React from 'react';
import { List } from 'semantic-ui-react';

class SchoolList extends React.Component {
  state = {}
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
