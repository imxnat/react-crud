import { Link } from "react-router-dom";
import { FcAcceptDatabase } from 'react-icons/fc';
import { BsPersonPlus } from 'react-icons/bs';


const List = ({ listEmployee, onDelete }) => {

        // eslint-disable-next-line
        // const [employees, setEmployees] = useState([]);

        // // useEffect(() => {

        // //     const url = 'https://jsonplaceholder.typicode.com/users';
            
        // //     const fetchData = async() => {
        // //         const res = await fetch(url);
        // //         const data = await res.json();
        // //         setEmployees(data)
        // //     };
        // //     fetchData();
        // // }, [setEmployees])

    return (
        
        <div className="card">
            <div className="card-header">
            <Link to="/create" className="btn btn-success"><BsPersonPlus/> Add new Employee</Link>
            </div>
            <div className="card-body">
                <h5><FcAcceptDatabase/>  Employees Database</h5>
            <table className="table table-hover table-bordered border-primary">
            <thead className="table-head">
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
                            {/* //edit employee */}
                            <Link to={"/edit/"+employee.id} className="btn btn-warning"
                            >Edit</Link>
                            {/* Delete employee */}
                            <button type="button" className="btn btn-danger" 
                                onClick={() => onDelete(employee.id)} 
                            >Delete</button>
                        </div>

                    </td>
                </tr>   
             ))} 
            </tbody>
        </table>
        </div>
    </div>
    )
}

export default List
