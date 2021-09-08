import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const List = ({ listEmployee }) => {

        const [employees, setEmployees] = useState([]);

        useEffect(() => {

            const url = 'https://jsonplaceholder.typicode.com/users';
            
            const fetchData = async() => {
                const res = await fetch(url);
                const data = await res.json();
                setEmployees(data)
            };
            fetchData();
        }, [setEmployees])

    return (
        
        <div className="card">
            <div className="card-header">
            <Link to="/create" className="btn btn-success">Add new Employee</Link>
            </div>
            <div className="card-body">
                <h4>Employees List</h4>
            <table className="table table-hover table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {listEmployee.map(employee => (

                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                            <Link to="/edit" className="btn btn-warning">Edit</Link>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>

                    </td>
                </tr>   
             ))} 
            </tbody>
        </table>
            </div>
                <div className="card-footer text-muted">
            </div>
        </div>
        
    )
}

export default List
