import React from 'react';
//create state for form
import axios from 'axios';
import TextField from '@material-ui/core/TextField';


class Signup extends React.Component {
    state = {
        username: '',
        password: '',
        department: ''
    };



//function for onChange input
onChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
};



//function for onSubmit 
//let me create new user
signup = event => {
    event.preventDefault();
    const endpoint = 'http://localhost:4000/api/protected/register';

    axios.post(endpoint, this.state)
    .then(res => {
        console.log(res)
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/users');
    })
    .catch(err => {
        console.log(err)
    })
}


//create form
render() {
    return (
        <div className='signup-form'>
        <form onSubmit={this.signup}>
        <TextField
        type='text'
        placeholder='username'
        name='username'
        onChange={this.onChange}
        value={this.state.username}
        />
         &nbsp;   &nbsp;   &nbsp;  
        <TextField
        type='text'
        placeholder='department'
        name='department'
        onChange={this.onChange}
        value={this.state.department}
        />
         &nbsp;   &nbsp;   &nbsp;  
        <TextField
        type='password'
        placeholder='password'
        name='password'
        onChange={this.onChange}
        value={this.state.password}
        />
        <button type='submit'>Sign Up</button>
        </form>
        </div>
        )
    }
} //remember to move bracket from the top down b/c it throws error otherwise


export default Signup;
