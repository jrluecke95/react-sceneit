import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import HomeNav from './components/HomeNav';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
      <div className="App">
        <HomeNav />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/favorites'>
            <Favorites />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
