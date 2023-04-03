import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import signupStyle from "../../pages/Home.module.css";
import { ToastContainer, toast } from "react-toastify";
import { seminarEdit } from "../../services/Apis";
import { useNavigate } from "react-router-dom";

const SeminarAddPage = () => {
  const { state } = useLocation();
  var email = sessionStorage.getItem('email');
  const navigate = useNavigate();
  const utype = state.utype;
  var defaultFormFields = {};
  if (utype === "1") {
    defaultFormFields = {
      faculty_name: "",
      student_name: "",
      title: "",
      type: "",
      year: "",
      date: "",
      venue: "",
      chief_guest: "",
      mode: "",
      collaborator: "",
      status: "Pending..",
    };
  }
  else {
    defaultFormFields = {
      faculty_name: "2020csb1135@iitrpr.ac.in",
      student_name: email,
      title: "",
      type: "",
      year: "",
      date: "",
      venue: "",
      chief_guest: "",
      mode: "",
      collaborator: "",
      status: "Pending..",
    };
  }

  const [formFields, setFormFields] = useState(defaultFormFields);

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
        if(utype === "1"){
          setFormFields({
            ...formFields,
            faculty_name: "",
            student_name: "",
            title: "",
            type: "",
            year: "",
            date: "",
            venue: "",
            chief_guest: "",
            mode: "",
            collaborator: "",
            status: "Pending..",
          });
          navigate("/StaffHome/StaffSeminar")}
        else{
        setFormFields({
          ...formFields,
          faculty_name: "2020csb1135@iitrpr.ac.in",
          student_name: email,
          title: "",
          type: "",
          year: "",
          date: "",
          venue: "",
          chief_guest: "",
          mode: "",
          collaborator: "",
          status: "Pending..",
        });
        navigate("/Profile/Seminars")}
      }
      else {
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

          <div className={signupStyle["form-item"]} id="faculty_name">
            <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>Faculty Name</label>
            <input style={{ height: "30px" }} className={signupStyle.myInput}
              placeholder="faculty_name"
              name="faculty_name"
              type="text"
              value={formFields.faculty_name}
              onChange={hanldeInputValueChange}
            />
          </div>

          <div className={signupStyle["form-item"]} id="student_name">
            <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>Student Name</label>
            <input style={{ height: "30px" }} className={signupStyle.myInput}
              placeholder="student_name"
              name="student_name"
              type="text"
              value={formFields.student_name}
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
}
else{
  return (
    <body className={signupStyle.rooted}>
      <section className={signupStyle["form-container"]}>
        <h2 className={signupStyle["form-heading"]}>Add More</h2>
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
  );}
};

export default SeminarAddPage;