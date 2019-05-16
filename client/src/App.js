import React from 'react';
import './App.css';
//import routes/links
import { Route, NavLink } from 'react-router-dom';
//import components
import Signin from './components/signin/Signin';
import Users from './components/users/Users';



function App() {
  return (
    <div className="App">
    <nav>
    <NavLink exact to='/signin'>Signin</NavLink>
    &nbsp; | &nbsp;
    <NavLink exact to='/users'>Users</NavLink>
    </nav>
    <div>
<Route path='/signin' component={Signin} />
<Route path='/users' component={Users} />
  </div>
    </div>
  );
}

export default App;
