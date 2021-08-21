
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Modal from './component/Modal';
import Login from './pages/login';
import Payment from './pages/payment';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <div>
      
        <nav>
         
        </nav>
        <Switch>     
          <PrivateRoute exact path="/payment" component={Payment} />
         <Route exact path="/" component={Login} /> 
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
