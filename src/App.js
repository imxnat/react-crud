import './App.css';
import List from './components/List';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  return (
    <Router>
      <Navbar className="Navbar" />
      <br/>
      <div className="App">
        <Route exact path="/" component={List} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/edit" component={Edit} />

      </div>
    </Router>
  );
}

export default App;
