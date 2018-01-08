import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BigMood from './components/BigMood';
import HomePage from './components/Homepage';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/love" component={BigMood}/>
        <Route path="/sad" component={BigMood}/>
        <Route path="/peace" render={(props)=> <BigMood line1='this is happy' line2='this is peace' {...props}/> } />
        <Route path="/party" render={(props)=> <BigMood line1='this is party' line2='lets make party'{...props}/> } />
      </Switch>
    )
  }
}

export default App;