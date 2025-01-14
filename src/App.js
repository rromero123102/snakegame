import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import GameManager from './components/GameManager';
import MainPage from './components/MainPage';
import Test from './components/test';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/Game" component={GameManager}/>
        <Route exact path="/Game1" component={Test}/>
        <Route exact path="/404" component={MainPage} />
        <Redirect to="/404"/>
      </Switch>
        

    </Router>
    </div>
  );
}

export default App;
