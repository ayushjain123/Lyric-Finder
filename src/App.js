import React, { Component } from 'react';
import Navbar from './component/layout/Navbar';
import Index from './component/layout/Index';
import Lyrics from './component/tracks/Lyrics';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from './context';

class App extends Component {
  render() {
    return(
  <Provider>
    <Router>
    <React.Fragment className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path ="/" component={Index}/>
          <Route exact path ="/lyrics/tracks/:id" component={Lyrics}/>
        </Switch>
      </div>
    </React.Fragment>
    </Router>
  </Provider>
  );
}
}

export default App;
