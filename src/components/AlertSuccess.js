import { BsCheckCircle } from "react-icons/bs";

const AlertSuccess = () => {

    return (
        <div class="alert alert-success d-flex align-items-center" 
        role="alert" >
        <div>
          <BsCheckCircle />  Employee added to the database successfully!
        </div>
      </div>
    )
}

export default AlertSuccess
