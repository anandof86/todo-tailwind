import {
    Route,
    Switch,
    BrowserRouter,
  } from 'react-router-dom';
import LandingComponent from '../components/dashboard';
import TodoGrid from '../components/todoList/todoGrid';
  
  const Routes = () => (
    <BrowserRouter>
      <Switch>
        // public route
        <Route exact path="/" component={LandingComponent} />
  
        // protected route
        <Route exact path="/home" component={TodoGrid} />

      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;