import React from 'react';
//create state for form


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
handleSubmit = event => {
    event.preventDefault();
    this.setState({
        username: '',
        password: '',
        department: ''
    })
}


//create form
render() {
    return (
        <div className='signup-form'>
        <form onSubmit={this.handleSubmit}>
        <input
        type='text'
        placeholder='username'
        name='username'
        onChange={this.onChange}
        value={this.state.username}
        />
        <input
        type='text'
        placeholder='department'
        name='department'
        onChange={this.onChange}
        value={this.state.department}
        />
        <input
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
