import { useState } from "react"
import { Link } from "react-router-dom"
import AlertSuccess from "./AlertSuccess"

const Create = ({ onCreate }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [alerts, setAlert] = useState(false)



    const onSubmit = (e) => {

        // this method prevent to not refresh the page
        e.preventDefault();

        onCreate({ name, email });

        setName('')
        setEmail('')

        setAlert(!alerts)
        setTimeout(() => setAlert(false), [5000])

    }

  

    return (
        <div>
            { alerts === true ? <AlertSuccess /> : ''}
        <div className="card">
            <div className="card-header">
                Employees
            </div>
            <div className="card-body">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <label htmlFor="">Name:</label>
                      <input 
                        type="text" 
                        value={name}
                        onChange={ (e) => setName(e.target.value)}
                        className="form-control" 
                        placeholder="Insert name" 
                        required
                       />
                      <small id="helpId" className="text-muted">Type the name of the employee</small>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Email:</label>
                      <input 
                        type="email" 
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                        className="form-control" 
                        placeholder="Insert email"
                        required
                      />
                      <small id="helpId" className="text-muted">Type the email of the employee</small>
                    </div>

                    <div className="btn-group" role="group" aria-label="">
                        <button 
                            type="submit" 
                            value="Save new Employee" 
                            className="btn btn-success"
                            >Add new Employee</button>
                        <Link to='/' className="btn btn-primary">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Create
