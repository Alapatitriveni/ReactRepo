import React, { useRef, useState } from 'react'

 function UncontrolledForm() {
    const emailRef=useRef();//1 next
    const passwordRef=useRef();//1 next
    const [error,setError]=useState();
    const submitHandler = (event) =>{//2 next
event.preventDefault();//3 next
        const emailEntered = emailRef.current.value;//2 next
        const passwordEntered = passwordRef.current.value;//2 next
        console.log(emailEntered,passwordEntered,"user enter details");//2 next
        if(emailEntered.length<15 && passwordEntered.length<10){//4 next
            setError(null);
            //allow user to submit
successSubmit();//5 next
            }else{
                setError("please enter <10 characters for email and password" )
                //throw the error
            }
        };
        const successSubmit=()=>{//5 next
            alert("client validations sucess")
            //hit  the server
        }
  return (
    //first bootstrap 5 w3 school lo code ni copie 
    //next html to jsx lo ki convert  cheyali
    //form will aceptes the  onsubmit
    <form onSubmit={submitHandler } >
    <div className="mb-3 mt-3">
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
    <div className="mb-3">
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
    </div>
    {true && <span style={{color:"red"}}>{error}</span> }
    <div className="form-check mb-3">
      {/* <label className="form-check-label">
        <input className="form-check-input" type="checkbox" name="remember" />{" "}
        Remember me
      </label> */}
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
  
  )
}
export default UncontrolledForm;