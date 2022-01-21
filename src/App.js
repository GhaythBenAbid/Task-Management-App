import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'

import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import RandomData from './views/random';

function App() {


  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path={"/random"}>
            <RandomData />
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
