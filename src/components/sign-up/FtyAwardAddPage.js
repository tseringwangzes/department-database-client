import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import signupStyle from "../../pages/Home.module.css";
import Sidebar from "../Sidebar";
import { useParams } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { FtyAddAwards } from "../../services/Apis";
import { useNavigate } from "react-router-dom";
const FtyAwardAddPage = () => {
  const { state } = useLocation();
  const utype = state.utype;
  var email = sessionStorage.getItem('email');
  const navigate = useNavigate();
  const id = state.id;
  var defaultFormFields ={}
  if(utype==="1"){
    defaultFormFields={
    faculty_name:"",
    award_name: "",
    award_reason: "",
    year: "",
    date: "",
    shared_with: "",
    };
  }
  else{
  defaultFormFields = {
    faculty_name:email,
    award_name: "",
    award_reason: "",
    year: "",
    date: "",
    shared_with: "",
  };}

  const [formFields, setFormFields] = useState(defaultFormFields);

  const hanldeInputValueChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    const{award_name,award_reason,year,date,shared_with,faculty_name} = formFields;
    if(award_name === ""){

      toast.error("Enter Award Name")

    }
    else{
      const response = await FtyAddAwards(formFields);
      if(response.status === 200){
        if(utype === "1"){
          setFormFields({...formFields,
            award_name: "",
            award_reason: "",
            year: "",
            date: "",
            shared_with: "",
            faculty_name:"",
          });
        }
        else{
        setFormFields({...formFields,
          award_name: "",
          award_reason: "",
          year: "",
          date: "",
          shared_with: "",
          faculty_name:email,
        });}
        if(utype==="1"){
          navigate("/StaffHome/StaffStudent")
        }
        else{
          navigate("/faculty/Awards")
        }
      }
      else{
        toast.error(response.response.data.error);
      }
    }

  };

  if(utype === "1"){
    return (
      <body className={signupStyle.rooted}>
        <section className={signupStyle["form-container"]}>
          <h2 className={signupStyle["form-heading"]}>Add More</h2>
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

              <div className={signupStyle["form-item"]} id="faculty_name">
              <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>faculty_name</label>
              <input style={{ height: "30px" }} className={signupStyle.myInput}
                placeholder="faculty_name"
                name="faculty_name"
                type="text"
                value={formFields.faculty_name}
                onChange={hanldeInputValueChange}
                />
              </div>
            <br />
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style={{ marginLeft: "auto", }} onClick={handleSubmit} >Submit</button>
          </form>
          <ToastContainer/>
        </section>
      </body>
    );
  }
  else{
  return (
    <body className={signupStyle.rooted}>
      <section className={signupStyle["form-container"]}>
        <h2 className={signupStyle["form-heading"]}>Add More</h2>
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
        </form>
        <ToastContainer/>
      </section>
    </body>
  );}
};

export default FtyAwardAddPage;