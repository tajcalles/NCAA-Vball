import React from 'react';
import { Header, Image, List, Grid } from 'semantic-ui-react';
import NCAAlogo from '../images/ncaa-logo.jpg';
import axios from 'axios';
import School from './School';


class SchoolList extends React.Component {
  state = { schools: [] };

  componentDidMount() {
    axios.get('/api/schools?schooltype=topSchools')
      .then( res => {
        this.setState({ schools: res.data })
      })
      .catch( res => {
        console.log(res.data);
      });
  }

  displaySchools = () => {
    return this.state.schools.map( school => {
      return(<School school={school} />);

    });
  }

  render() {
    return (
      <div>
        <Header as='h1' color='blue' size='large' >
          <Image src={NCAAlogo} circular />
          NCAA Volleyball Tracker
        </Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <List as='ol'>
                { this.displaySchools() }
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default SchoolList;
