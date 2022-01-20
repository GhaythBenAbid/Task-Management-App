import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Dashboard from './views/Dashboard';

import Login from './views/Login';
import Register from './views/Register';

function App() {


  return (
    <Router>
      <div className='App'>
        <Switch>
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
