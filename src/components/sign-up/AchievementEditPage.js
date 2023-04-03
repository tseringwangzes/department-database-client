import React, { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import signupStyle from "../../pages/Home.module.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { achievementEdit } from "../../services/Apis";


const AchievementEditPage = () => {


  const {state} = useLocation();
  const id=state.id;
  const utype = state.utype;
  const navigate = useNavigate();

  const defaultFormFields = {
    faculty_name:state.faculty_name,
    student_name:state.student_name,
    achievements: state.achievements,
    year: state.year,
    date: state.date,
    shared_with: state.shared_with,
    status: "Pending..",
  };

 

  const [formFields, setFormFields] = useState(defaultFormFields);
  
  const deleteid=async (id)=>{
    let result= await fetch(`http://localhost:4002/user/achdeleteid/${id}`,{
      method:"Delete"});
      result=await result.json()
  }

  const hanldeInputValueChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const{achievements,year,date,shared_with,status,faculty_name,student_name} = formFields;
    if(achievements === ""){

      toast.error("Enter achievement Name")

    }
    else{
      const response = await achievementEdit(formFields);
      if(response.status === 200){
        setFormFields({...formFields,
          achievements: state.achievements,
          year: state.year,
          date: state.date,
          shared_with: state.shared_with,
          status:"Pending",
      faculty_name:state.faculty_name,
    student_name:state.student_name
       });
       deleteid(id);
       if(utype === "1"){
        navigate("/StaffHome/StaffFaculty")
       }
       else{
          navigate("/Profile/Achievements")
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
      <h2 className={signupStyle["form-heading"]}>Edit Details</h2>
      <form style={{ fontSize: 15 }} onSubmit={handleSubmit}>
        <div className={signupStyle["form-item"]} id="achievements">
          <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>Achievement</label>
          <input style={{height: "30px"}} className={signupStyle.myInput}
            placeholder="Enter your Achievement"
            name="achievements"
            type="text"
            value={formFields.achievements}
            onChange={hanldeInputValueChange}
          />
        </div>

        <div className={signupStyle['form-item']} id="year">
          <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>Year</label>
          <input style={{height: "30px"}} className={signupStyle.myInput}
            placeholder="Enter the year"
            name="year"
            type="text"
            value={formFields.year}
            onChange={hanldeInputValueChange}
          />
          
        </div>

        <div className={signupStyle["form-item"]} id="date">
        <label style={{ fontSize: 20 }}className={signupStyle.myLabel}>Date</label>
          <input style={{height: "30px"}} className={signupStyle.myInput}
            placeholder="Enter the date"
            name="date"
            type="text"
            value={formFields.date}
            onChange={hanldeInputValueChange}
          />
          
        </div>

        <div className={signupStyle["form-item"]} id="shared_with">
          <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>Shared with</label>
          <input style={{height: "30px"}} className={signupStyle.myInput}
            placeholder="Shared with whom"
            name="shared_with"
            type="text"
            value={formFields.shared_with}
            onChange={hanldeInputValueChange}
          />
          
        </div>
        <br />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style={{ marginLeft: "auto", }} onClick={handleSubmit}  >Submit</button>

      </form>
      <ToastContainer/>
    </section>
    </body>
  );
};

export default AchievementEditPage;