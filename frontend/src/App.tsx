import { Switch, Route } from 'react-router-dom';

import Login from './Components/Login/Login';
import Dashboard from './Components/dashboard';

import AddUser from './Components/Pages/AddUser';
import ViewUser from './Components/Pages/ViewUser';
import ViewApplication from './Components/Pages/ViewApplication';
import StudentProfile from './Components/Pages/StudentProfile';

function App() {
  return (      
        <Switch>
            <Route path="/" exact>
              <Login />
            </Route>

            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>

            <Route path="/adduser" exact>
               <AddUser />
            </Route>

            <Route path="/viewuser" exact>
               <ViewUser />
            </Route>


            <Route path="/viewapplication" exact>
              <ViewApplication />
            </Route>

            <Route path="/studentprofile/:sid" exact>
              <StudentProfile />
            </Route>

            
        </Switch>

  );
}

export default App;
