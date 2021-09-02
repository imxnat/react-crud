import { Link } from "react-router-dom"
import '../App.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light nav-bg" >
            <div className="nav navbar-nav">
                <Link className="nav-item nav-link active" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/create">Create Employee</Link>
            </div>
        </nav>
    )
}

export default Navbar
