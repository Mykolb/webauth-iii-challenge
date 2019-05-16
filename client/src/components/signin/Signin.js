import React from 'react';
//import axios
import axios from 'axios';
//create state form for signin

class Signin extends React.Component {
    state = {
        username: 'Liam',
        password: 'pwd',
    };



//function for changeHandler input
changeHandler = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
};



//function for submitHandler but I called it login 
//const endpoint = `${process.env.API_URL/api/auth/login}`; for deployment 
login = event => {
    event.preventDefault();
    const endpoint = 'http://localhost:4000/api/protected/login';

    axios.post(endpoint, this.state)
    .then(res => {
        console.log(res)
        //new part - localStorage 
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/users');
    })
    .catch(err => {
        console.log(err)
    })

   }




//create signin form
render() {
    return (
        <div className='signup-form'>
        <form onSubmit={this.login}>
        <input
        type='text'
        placeholder='username'
        name='username'
        onChange={this.changeHandler}
        value={this.state.username}
        />
        <input
        type='password'
        placeholder='password'
        name='password'
        onChange={this.changeHandler}
        value={this.state.password}
        />
        <button type='submit'>Sign In</button>
        </form>
        </div>
        )
    }
} //remember to move bracket from the top down b/c it throws error otherwise


export default Signin;

