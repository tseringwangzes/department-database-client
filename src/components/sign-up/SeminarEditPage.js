import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import signupStyle from "../../pages/Home.module.css";
import { ToastContainer, toast } from "react-toastify";
import { seminarEdit } from "../../services/Apis";
import { useNavigate } from "react-router-dom";

const SeminarEditPage = () => {

  const { state } = useLocation();
const utype = state.utype;
  const id = state.id;
  const navigate = useNavigate();


  const defaultFormFields = {
    faculty_name: state.faculty_name,
    student_name: state.student_name,
    title: state.title,
    type: state.type,
    year: state.year,
    date: state.date,
    venue: state.venue,
    chief_guest: state.chief_guest,
    mode: state.mode,
    collaborator: state.collaborator,
    status: "Pending..",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const deleteid = async (id) => {
    let result = await fetch(`http://localhost:4002/user/deleteseminarid/${id}`, {
      method: "Delete"
    });
    result = await result.json()
  }

  const hanldeInputValueChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { title, type, year, date, venue, chief_guest, mode, collaborator, status, faculty_name, student_name } = formFields;
    if (title === "") {

      toast.error("Enter title Name")

    }
    else {
      const response = await seminarEdit(formFields);
      if (response.status === 200) {
        setFormFields({
          ...formFields,
          title: state.title,
          type: state.type,
          year: state.year,
          date: state.date,
          venue: state.venue,
          chief_guest: state.chief_guest,
          mode: state.mode,
          collaborator: state.collaborator,
          status: "Pending",
          faculty_name: state.faculty_name,
          student_name: state.student_name
        });
        deleteid(id);
        if(utype === "1"){
          navigate("/StaffHome/StaffSeminar")
        }
        else{
        navigate("/Profile/Seminars")
        }
      }
      else {
        toast.error(response.response.data.error);
      }
    }
  };


  return (
    <body className={signupStyle.rooted}>
      <section className={signupStyle["form-container"]}>
        <h2 className={signupStyle["form-heading"]}>Edit</h2>
        <form style={{ fontSize: 15 }} onSubmit={handleSubmit}>
          <div className={signupStyle["form-item"]} id="title">
            <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>Title</label>
            <input style={{ height: "30px" }} className={signupStyle.myInput}
              placeholder="Enter the title"
              name="title"
              type="text"
              value={formFields.title}
              onChange={hanldeInputValueChange}
            />
          </div>

          <div className={signupStyle['form-item']} id="type">
            <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>type</label>
            <input style={{ height: "30px" }} className={signupStyle.myInput}
              placeholder="Enter the type"
              name="type"
              type="text"
              value={formFields.type}
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

          <div className={signupStyle["form-item"]} id="venue">
            <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>Shared with</label>
            <input style={{ height: "30px" }} className={signupStyle.myInput}
              placeholder="venue"
              name="venue"
              type="text"
              value={formFields.venue}
              onChange={hanldeInputValueChange}
            />
          </div>

          <div className={signupStyle["form-item"]} id="chief_guest">
            <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>chief_guest</label>
            <input style={{ height: "30px" }} className={signupStyle.myInput}
              placeholder="chief_guest"
              name="chief_guest"
              type="text"
              value={formFields.chief_guest}
              onChange={hanldeInputValueChange}
            />
          </div>

          <div className={signupStyle["form-item"]} id="mode">
            <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>mode</label>
            <input style={{ height: "30px" }} className={signupStyle.myInput}
              placeholder="mode"
              name="mode"
              type="text"
              value={formFields.mode}
              onChange={hanldeInputValueChange}
            />
          </div>

          <div className={signupStyle["form-item"]} id="collaborator">
            <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>collaborator</label>
            <input style={{ height: "30px" }} className={signupStyle.myInput}
              placeholder="collaborator"
              name="collaborator"
              type="text"
              value={formFields.collaborator}
              onChange={hanldeInputValueChange}
            />
          </div>

          <br />
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style={{ marginLeft: "auto", }} onClick={handleSubmit} >Submit</button>
        </form>
        <ToastContainer />
      </section>
    </body>
  );
};

export default SeminarEditPage;