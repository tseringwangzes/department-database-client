import React from 'react'
import { useNavigate } from "react-router-dom"
//import globalStyles from '../../src/assets/global-styles/bootstrap.min.module.css';
import firstStyle from "../styles/mix.module.css"
//import classnames from 'classnames';
import Headers1 from '../components/Headers1';
function First(){
    const history = useNavigate();
    return (
        <>
        <section>
            <Headers1/>
            <div className={firstStyle.form_data}>
                <div className={firstStyle.form_heading}>
                    <h1 className={firstStyle.heading}>Welcome Back!</h1>
                    <p className={firstStyle.para}>Choose your User Type</p>
                </div>
                <form className={firstStyle.my_form}>
                  <button className={firstStyle.btn} onClick={()=>history('/Login',{state:"1"})}>Student</button>  
                  <button className={firstStyle.btn} onClick={()=>history('/Login',{state:"2"})}>Faculty</button>  
                  <button className={firstStyle.btn} onClick={()=>history('/Login',{state:"3"})}>Office Staff</button>  
                  <button className={firstStyle.btn} onClick={()=>history('/Login',{state:"4"})}>Admin</button>  
                </form>
            </div>
        </section>
        </>
    )
}

export default First