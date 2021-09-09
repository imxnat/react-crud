import { useState } from "react";
import { Link } from "react-router-dom";

const Edit = ({ onEdit }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const onSave = (e) => {
         // this method prevent to not refresh the page
         e.preventDefault();
         // add this fields
         onEdit({ name, email });
         //clear fields
         setName('')
         setEmail('')
    }

    return (
       <div className="card">
           <div className="card-header">
               Edit Employee
           </div>
           <div className="card-body">
           <form onSubmit={onSave}>
                    <div className="form-group">
                      <label htmlFor="">Full Name</label>
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
                      <label htmlFor="">Email</label>
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
                            >Save changes</button>
                        <Link to='/' className="btn btn-primary">Cancel</Link>
                    </div>
                </form>
           </div>
           <div className="card-footer text-muted">
               Footer
           </div>
       </div>
    )
}

export default Edit
