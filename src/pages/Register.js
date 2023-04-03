import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {registerfunction} from "../services/Apis";
import { NavLink,useNavigate} from "react-router-dom"
import registerStyle from "../styles/mix.module.css"

const Register = () => {

  const [inputdata,setInputdata] = useState({
    fname:"",
    email:"",
    password:""
  });

  const navigate = useNavigate();
  

  // setinputvalue
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setInputdata({...inputdata,[name]:value})
  }


  // register data
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {fname,email,usertype} = inputdata;

    if(fname === ""){

      toast.error("Enter User Name")

    }else if(email === ""){

      toast.error("Enter User Email")

    }else if(!email.includes("@")){

      toast.error("Enter Valid Email")

    }else if(usertype === ""){

      toast.error("Enter User Type")

    }else{

      const response = await registerfunction(inputdata);
      
      if(response.status === 200){

        setInputdata({...inputdata,fname:"",email:"",password:""});

        navigate("/Admin")

      }else{
        
        toast.error(response.response.data.error);
      }
    }
  }


  return (
    <>
      <section className={registerStyle.page}>
        <div className={registerStyle.form_data}>
          <div className={registerStyle.form_heading}>
            <h1 className={registerStyle.heading}>Sign Up</h1>
            <p className = {registerStyle.para} style={{textAlign:"center"}}>Enter the details of the new user!!</p>
          </div>
          <form className={registerStyle.my_form}>
            <div className={registerStyle.form_input}>
              <label className={registerStyle.myLabel}htmlFor="fname">Name</label>
              <input className={registerStyle.myData} type="text" name="fname" id="" onChange={handleChange} placeholder='Enter User Name' />
            </div>
            <div className={registerStyle.form_input}>
              <label className = {registerStyle.myLabel} htmlFor="email">Email</label>
              <input className = {registerStyle.myData} type="email" name="email" id=""  onChange={handleChange}  placeholder='Enter User Email Address' />
            </div>
            {/* <div className={registerStyle.form_input}>
              <label className = {registerStyle.myLabel} htmlFor="password">Password</label>
              <div className={registerStyle.two}>
              <input className = {registerStyle.myData} type={!passhow ? "password" : "text"} name="password" id=""  onChange={handleChange}  placeholder='Enter User password' />
              <div className={registerStyle.showpass} onClick={()=>setPassShow(!passhow)} >
              {!passhow ? "Show" : "Hide"}
              </div>
              </div>
            </div> */}

            <div className={registerStyle.form_input}>
              <label className = {registerStyle.myLabel} htmlFor="usertype">User Type</label>
              <input className = {registerStyle.myData} type="text" name="usertype" id=""  onChange={handleChange}  placeholder='Enter User Type' />
            </div>
            
            <button className={registerStyle.btn} onClick={handleSubmit}>Sign Up</button>
            {/* <p className={registerStyle.para}>Already Registered? <NavLink to="/Login">Login</NavLink> </p> */}
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Register