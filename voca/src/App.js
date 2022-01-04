import Header from './Component/Header'
import Daylist from './Component/Daylist';
import Day from './Component/Day';
import Emptypage from './Component/Emptypage';
import CreateWord from './Component/CreateWord';
import CreateDay from './Component/CreateDay';
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
            <Route path='/create_word'>
              <CreateWord />
            </Route>
            <Route path='/create_day'>
              <CreateDay />
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
