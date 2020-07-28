import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Components/Pages/Homepage/HomePage';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route path={'/shop'} component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
