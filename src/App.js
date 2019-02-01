import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import Header from './Components/Header';
import routes from './routes';
import myStore from './ducks/store'

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
      <HashRouter>
        <div className="App">
          <Header />
          
          
          {routes}          
        </div>
      </HashRouter>
      </Provider>
    );
  }
}

export default App;
