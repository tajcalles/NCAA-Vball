import React, { Component } from 'react';
import { Header, Container, Image } from 'semantic-ui-react';
import NCAAlogo from './images/ncaa-logo.jpg';
import SchoolList from './components/SchoolList';

class App extends Component {
  state = { school: []};

  render() {
    return (
      <Container textAlign="center">
         <Header as='h1' color='blue'>
         <Image src={NCAAlogo} circular />
         NCAA Volleyball Tracker</Header>
         <SchoolList />
      </Container>
    );
  }
}

export default App;
