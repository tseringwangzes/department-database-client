import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { userVerify } from "../services/Apis"
import otpStyle from "../styles/mix.module.css"
import Headers1 from '../components/Headers1';

const Otp = () => {
  const [otp, setOtp] = useState("");

  const {state }= useLocation();

  const navigate = useNavigate();
  const id=state.idd;

  const LoginUser = async (e) => {
    e.preventDefault();

    if (otp === "") {
      toast.error("Enter Your OTP")

    } else if (!/[^a-zA-Z]/.test(otp)) {
      toast.error("Enter Valid OTP")

    } else if (otp.length < 6) {
      toast.error("OTP Length minimum 6 digit")

    } else {
      const data = {
        otp, email: state.email,type:id
      }

      const response = await userVerify(data);
      if (response.status === 200) {
        const email = state.email
        localStorage.setItem('email', email);
        localStorage.setItem("userdbtoken", response.data.userToken);
        toast.success(response.data.message);
        setTimeout(() => {
          if(id==="1")
          {navigate("/Profile",{state:email})}
          else if(id==="2")
          {navigate("/faculty/Profile")}
          else if(id==="3")
          {navigate("/StaffHome",{state:email})}
          else if(id==="4")
          {navigate("/Admin",{state:email})}
        }, 5000)
      } else {
        toast.error(response.response.data.error)
      }
    }
  }

  return (
    <>
      <section className={otpStyle.page}>
        <Headers1/>
        <div className={otpStyle.form_data}>
          <div className={otpStyle.form_heading}>
            <h1 className={otpStyle.heading}>Please Enter Your OTP Here</h1>
          </div>
          <form className={otpStyle.my_form}>
            <div className={otpStyle.form_input}>
              <label className={otpStyle.myLabel} htmlFor="otp">OTP</label>
              <input className={otpStyle.myData} type="text" name="otp" id="" onChange={(e) => setOtp(e.target.value)} placeholder='Enter Your OTP' />
            </div>
            <button className={otpStyle.btn} onClick={LoginUser}>Submit</button>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Otp