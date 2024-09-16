import { useRef } from "react";
import "./task1uncontroll.css";
const Form=()=>{
    const FirstNameRef=useRef();
    const LastNameRef=useRef();
    const emailRef=useRef();
    const ConfromemailRef=useRef();
    const passwordRef=useRef();
    const mobileNumberRef=useRef();
    return(
      <center>
        <form className="triveni">
          <div className="tri">
            <div>
            <label htmlFor="FirstName" className="form-label">
        FirstName:
      </label>
      <input
        type="text"
        className="form-control"
        id="first"
        placeholder="Enter FirstName"
        name="FName"
        ref={FirstNameRef}
        />
            </div><br></br>
            <div>
            <label htmlFor="LastName" className="form-label">
      LastName:
      </label>
      <input
        type="text"
        className="form-control"
        id="first"
        placeholder="LastName"
        name="LName"
        ref={LastNameRef}
        
        />
            </div><br></br>
        <div>
            <label htmlFor="email" className="form-label">
        Email:
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="Enter email"
        name="email"
        ref={emailRef}
        />
        </div>
        <br></br>
        <div>
        <label htmlFor="Confromemail" className="form-label">
        ConfromEmail:
      </label>
      <input
        type="Confromemail"
        className="form-control"
        id="Confromemail"
        placeholder="Enter email"
        name="Confromemail"
        ref={ConfromemailRef}
        />
        </div><br></br>
        <div>
        <label htmlFor="pwd" className="form-label">
        Password:
      </label>
      <input
        type="password"
        className="form-control"
        id="pwd"
        placeholder="Enter password"
        name="pswd"
        ref={passwordRef}        
        />
        </div><br></br>
        <div>
        <label htmlFor="mobileNumber" className="form-label">
        mobile Number:
      </label>
      <input
        type="Numbers"
        className="form-control"
        id="mobile"
        placeholder="Enter Mobile Number"
        name="mobile"
        ref={mobileNumberRef}
        />
        </div><br></br>
        <div>
            <button type="submit" className="btn btn-primary">
                submit
            </button>
        </div>
        </div>
        </form>
        </center>
      
    )
}
export default Form;