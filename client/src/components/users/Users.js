import React from 'react';
//create component that renders list of users 
import requiresAuth from '../auth/requireAuth';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class Users extends React.Component {
    state = {
        users: []
    }



    componentDidMount() {
        axios.get('/users')
        .then(res => {
          this.setState({ users: res.data });
        })
      }

    
render() {
    return (
        <div>
            <h2>User's List</h2>
            <ul>
            {this.state.users.map(user => {
                return (
                  <div className='user-card' key={user.id}>
                    <h2>{user.username}</h2>
                    <h3>{user.department}</h3>
                    <h3>{user.id}</h3>
                  </div>
                )
            })}
            </ul>
        </div>
    )
}
}

export default requiresAuth(Users);