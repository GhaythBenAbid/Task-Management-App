import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'

import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import AddNewCollection from './views/AddNewCollection';
import ListCollections from './views/ListCollections';
import Hello from './views/Hello';

function App() {


  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path={"/collection/:id"}>
            <Hello />
          </Route>
          <Route path={"/collections"}>
            <ListCollections />
          </Route>
          <Route path={"/addNewCollection"}>
            <AddNewCollection />
          </Route>
          <Route path={"/Dashboard"}>
            <Dashboard />
          </Route>
          <Route path={"/login"}>
            <Login />
          </Route>
          <Route path={"/register"}>
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
