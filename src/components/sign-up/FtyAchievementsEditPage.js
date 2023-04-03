import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import signupStyle from "../../pages/Home.module.css";
import Sidebar from "../Sidebar";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FtyEditAchievements } from "../../services/Apis";
import { useNavigate } from "react-router-dom";

const FtyAchievementsEditPage = () => {

    const { state } = useLocation();

    const id = state.id;
    const utype = state.utype;
    const navigate = useNavigate();

    const defaultFormFields = {
        faculty_name:state.faculty_name,
        Achievements: state.Achievements,
        year: state.year,
        date: state.date,
        shared_with: state.shared_with,
    };

    const [formFields, setFormFields] = useState(defaultFormFields);

    const deleteid = async (id) => {
        let result = await fetch(`http://localhost:4002/user/ftydeleteachievements/${id}`, {
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

        const { Achievements,year, date, shared_with,faculty_name } = formFields;
        if (Achievements === "") {

            toast.error("Enter Achievement Name")

        }
        else {
            const response = await FtyEditAchievements(formFields);
            if (response.status === 200) {
                setFormFields({
                    ...formFields,
                    Achievements: state.Achievements,
                    year: state.year,
                    date: state.date,
                    shared_with: state.shared_with,
                    faculty_name:state.faculty_name,
                });
                if(utype === "1"){
                    navigate("/StaffHome/StaffFaculty")
                }
                else{
                navigate("/faculty/Achievements")
                }
            }
            else {
                toast.error(response.response.data.error);
            }
        }


        deleteid(id);
    };


    return (
        <body className={signupStyle.rooted}>
            <section className={signupStyle["form-container"]}>
                <h2 className={signupStyle["form-heading"]}>Edit</h2>
                <form style={{ fontSize: 15 }} onSubmit={handleSubmit}>
                    <div className={signupStyle["form-item"]} id="Achievements">
                        <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>Achievement</label>
                        <input style={{ height: "30px" }} className={signupStyle.myInput}
                            placeholder="Enter the achievement"
                            name="Achievements"
                            type="text"
                            value={formFields.Achievements}
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
                <ToastContainer />
            </section>
        </body>
    );
};

export default FtyAchievementsEditPage;