import { Link } from "react-router-dom"
import '../App.css'
import { BsPersonPlus, BsPeople, BsPencilSquare } from 'react-icons/bs'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light nav-bg" >
            <div className="nav navbar-nav" >
                <Link style={{color:'white'}} className="nav-item nav-link" to="/"><BsPeople/>  System</Link>
                <Link style={{color:'white'}} className="nav-item nav-link" to="/create"><BsPersonPlus/>  Create</Link>
                <Link style={{color:'white'}} className="nav-item nav-link" to="/edit"><BsPencilSquare/>  Edit</Link>
            </div>
        </nav>
    )
}

export default Navbar
