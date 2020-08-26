import React from 'react';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Home from './pages/Home';
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer'
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
