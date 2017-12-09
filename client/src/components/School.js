import React from 'react';
import { List, Input, Button } from 'semantic-ui-react';
import axios from 'axios';

class School extends React.Component {
  state = { editing: false, name: this.props.school.name }

  toggleEdit = (cancel = false) => {
    if(cancel) {
      this.setState({ name: this.props.school.name })

    this.setState({ editing: !this.state.editing })
  }
}

  editSchool = () => {
    axios.put(`/api/schools/${this.props.school.id}`, { school: {  name: this.state.name } })
    .then( res => {
      this.toggleEdit();
    })
    .catch( res => {
      console.log(res);
    });
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
    const { name } = this.state;

    if(this.state.editing)
      return(
        <List.Item>
          <Input type='text' defaultValue={ name } onChange={this.handleChange} />
          <Button onClick={ ()=> this.toggleEdit(true) }>Cancel</Button>
          <Button primary onClick={ this.editSchool }>Save</Button>
        </List.Item>
        );
      else
        return(
          <List.Item onClick={ this.toggleEdit }>
            {name}
          </List.Item>
        );
      }
    }


export default School;
