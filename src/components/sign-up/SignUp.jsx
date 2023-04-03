import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import signupStyle from "../../pages/Home.module.css";
import { ToastContainer,toast } from "react-toastify";
import { addmorefunction } from "../../services/Apis";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const { state } = useLocation();

  const id = state.id;
  const utype = state.utype;
  const navigate = useNavigate();


  const defaultFormFields = {
    faculty_name:state.faculty_name,
    student_name:state.student_name,
    award_name: state.award_name,
    award_reason: state.award_reason,
    year: state.year,
    date: state.date,
    shared_with: state.shared_with,
    status: "Pending..",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const deleteid=async (id)=>{
    let result= await fetch(`http://localhost:4002/user/deleteid/${id}`,{
      method:"Delete"});
      result=await result.json()
  }

  const hanldeInputValueChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    const{award_name,award_reason,year,date,shared_with,status,faculty_name,student_name} = formFields;
    if(award_name === ""){

      toast.error("Enter Award Name")

    }
    else{
      const response = await addmorefunction(formFields);
      if(response.status === 200){
        setFormFields({...formFields,award_name: state.award_name,
          award_reason: state.award_reason,
          year: state.year,
          date: state.date,
          shared_with: state.shared_with,
        status:"Pending",
      faculty_name:state.faculty_name,
    student_name:state.student_name});
    

    deleteid(id);
    if(utype === "1"){
      navigate("/StaffHome/StaffStudent")
    }
    else{
          navigate("/Profile/Awards")
    }
      }
      else{
        toast.error(response.response.data.error);
      }
    }

  };


  return (
    <body className={signupStyle.rooted}>
      <section className={signupStyle["form-container"]}>
        <h2 className={signupStyle["form-heading"]}>Edit</h2>
        <form style={{ fontSize: 15 }} onSubmit={handleSubmit}>
          <div className={signupStyle["form-item"]} id="award_name">
            <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>Name</label>
            <input style={{ height: "30px" }} className={signupStyle.myInput}
              placeholder="Enter the name"
              name="award_name"
              type="text"
              value={formFields.award_name}
              onChange={hanldeInputValueChange}
            />
          </div>

          <div className={signupStyle['form-item']} id="award_reason">
            <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>Reason</label>
            <input style={{ height: "30px" }} className={signupStyle.myInput}
              placeholder="Enter the Reason"
              name="award_reason"
              type="text"
              value={formFields.award_reason}
              onChange={hanldeInputValueChange}
            />

          </div>

          <div className={signupStyle["form-item"]} id="year">
            <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>Year</label>
            <input style={{ height: "30px" }} className={signupStyle.myInput}
              placeholder="Enter the Year"
              name="year"
              type="text"
              value={formFields.year}
              onChange={hanldeInputValueChange}
            />

          </div>

          <div className={signupStyle["form-item"]} id="date">
            <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>date</label>
            <input style={{ height: "30px" }} className={signupStyle.myInput}
              placeholder="Enter the date"
              name="date"
              type="text"
              value={formFields.date}
              onChange={hanldeInputValueChange}
            />

          </div>

          <div className={signupStyle["form-item"]} id="shared_with">
            <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>Shared with</label>
            <input style={{ height: "30px" }} className={signupStyle.myInput}
              placeholder="Shared with whom"
              name="shared_with"
              type="text"
              value={formFields.shared_with}
              onChange={hanldeInputValueChange}
              />
            </div>
          <br />
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style={{ marginLeft: "auto", }} onClick={handleSubmit} >Submit</button>
          {/* <button style={{height: "1px", width:"60px"}} className={signupStyle["form-button"]} type="submit">
          Submit
        </button> */}
        </form>
        <ToastContainer/>
      </section>
    </body>
  );
};

export default SignUp;