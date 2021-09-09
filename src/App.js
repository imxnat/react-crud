import './App.css';
import List from './components/List';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import Create from './components/Create';
import Edit from './components/Edit';
import { useState } from 'react';

function App() {

    const [employees, setEmployees] = useState([      
      {
        id:"5297",
        name: "Nathalie Rivas",
        email: "nathalier.dev@gmail.com"
      },
      {
        id:"5321",
        name: "Raydesite CA",
        email: "raydesite@gmail.com"
      },
      {
        id:"5412",
        name: "Pedrito Alimaña",
        email: "pedritoA@out.com"
      },
      {
        id:"9297",
        name: "Empleado Dev",
        email: "empleado@raydesite.com"
      },
      {
        id:"5997",
        name: "Empleado UI",
        email: "uidesigner@raydesite.com"
      },
    ])

  
    // Create Employee
  const createEmployee = (employee) => {

    const id = Math.floor(Math.random() * 10000) + 1;

    const newEmployee = {id, ...employee}

    setEmployees([...employees, newEmployee])
  }

  // delete employee
  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id))
  }

  // //edit employee
  // const [editEmployee, setEditEmployee] = useState(
  //   {
  //     name: '', 
  //     email: ''
  //   });

  // const editRow = (employee) => {
  //   setEditEmployee({
  //     name: employee.name,
  //     email: employee.email
  //   })
  // }

  return (
    <Router>
      <Navbar className="Navbar" />
      <br/>
      <div className="App">
        <Route exact path="/">
            <List listEmployee={employees} onDelete={deleteEmployee} />
        </Route>
        <Route exact path="/create">
            <Create onCreate={createEmployee} />
        </Route>
        <Route exact path="/edit">
          <Edit />  
        </Route>
        {/* edit especific employee */}
        <Route exact path="/edit/:id">
          <Edit  />  
        </Route>

      </div>
    </Router>
  );
}

export default App;
