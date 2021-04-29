import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserList } from './components/UserList'
import { UserDetails } from './components/userDetails';
import { PostDetails } from './components/PostDetails';
import './App.css';
import 'bulma/css/bulma.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <div className="App">

    <Switch>
      <Route path="/details">
        <UserDetails />
      </Route>

      <Route path="/listOfPost">
        <PostDetails />
      </Route>

      <Route path="/" exact>
        <UserList />
      </Route>
    </Switch>
    </div>
  );
}

