import Header from './Component/Header'
import Daylist from './Component/Daylist';
import Day from './Component/Day';
import Emptypage from './Component/Emptypage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Switch>
            <Route exact path='/'>
              <Daylist />
            </Route>
            <Route path='/day/:day'>
              <Day />
            </Route>
            <Route>
              <Emptypage />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
