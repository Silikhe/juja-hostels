import React from 'react';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Home from './pages/Home';
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
