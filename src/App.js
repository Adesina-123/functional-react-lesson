import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Components/Pages/Homepage/HomePage';

import './App.scss';

const HatPage = () => {
  return (
    <div className="hoe">
      <h1>Hats Page</h1>
    </div>
  );
};
// const Topic = (props) => {
//   console.log(props);
//   return (
//     <div className="hats">
//       <h1>Topic</h1>
//     </div>
//   );
// };
// const TopicDetail = () => {
//   return (
//     <div className="hats">
//       <h1>Topic Detail</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route path={'/hats'} component={HatPage} />
   
      </Switch>
    </div>
  );
}

export default App;
