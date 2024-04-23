
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    
    <div className="App">

        {/* <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            
          </Switch>
        </Router>
     */}
     <Login/>

    </div>
  );
}

export default App;

