import React from 'react';
import { UserList } from './components/UserList'
import { UserDetails } from './components/userDetails';
import './App.css';
import 'bulma/css/bulma.min.css';

export const App = () => {
  return (
    <div className="App">
      <UserList />
      <UserDetails />
    </div>
  );
}

