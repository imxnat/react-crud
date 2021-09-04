import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const List = () => {

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
        
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (

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
    )
}

export default List
