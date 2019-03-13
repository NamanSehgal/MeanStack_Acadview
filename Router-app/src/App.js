import React, { Component } from 'react';
import Home from './components/Home';
import Form from './components/Form';
import Navbar from './components/Navbar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/form' component={Form} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
