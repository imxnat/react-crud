import './App.css';
import List from './components/List';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import Create from './components/Create';
import Edit from './components/Edit';
import { useState } from 'react';

function App() {

    const [employees, setEmployees] = useState([])
  
    // Create Employee
  const createEmployee = (employee) => {

    const id = Math.floor(Math.random() * 10000) + 1;

    const newEmployee = {id, ...employee}

    setEmployees([...employees, newEmployee])
  }


  return (
    <Router>
      <Navbar className="Navbar" />
      <br/>
      <div className="App">
        <Route exact path="/">
            <List listEmployee={employees} />
        </Route>
        <Route exact path="/create">
            <Create onCreate={createEmployee} />
        </Route>
        <Route exact path="/edit" component={Edit} />

      </div>
    </Router>
  );
}

export default App;
