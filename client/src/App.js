import React from 'react';
import './App.css';
//import routes/links
import { Route, NavLink, withRouter } from 'react-router-dom';
//import components
import Signin from './components/signin/Signin';
import Users from './components/users/Users';
import Signup from './components/signup/Signup';



class App extends React.Component {
  render() {
  return (
    <div className="App">
    <nav>
    <NavLink exact to='/signin'>Signin</NavLink>
    &nbsp;   &nbsp;  &nbsp;
    <NavLink exact to='/signup'>Signup</NavLink>
    &nbsp;  &nbsp;  &nbsp;
   <NavLink exact to='/users'>Users</NavLink>
   &nbsp;  &nbsp;  &nbsp;
   <button onClick={this.exit}>Logout</button>
    </nav>
    <div>
<Route path='/signin' component={Signin} />
<Route path='/signup' component={Signup} />
<Route path='/users' component={Users} />
  </div>
    </div>
    );
  }

  exit = () => {
    localStorage.removeItem('jwt');
  
    this.props.history.push('/login');
  }
  
  }



export default withRouter(App);
