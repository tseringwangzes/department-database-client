import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import signupStyle from "../../pages/Home.module.css";
import { ToastContainer, toast } from "react-toastify";
import { FtyEditForeign } from "../../services/Apis";
import { useNavigate } from "react-router-dom";

const FtyForeignEditPage = () => {

    const { state } = useLocation();
    const utype = state.utype;
    const id = state.id;
    const navigate = useNavigate();


    const defaultFormFields = {
        faculty_name:state.faculty_name,
        topic:state.topic,
        start_date: state.start_date,
        end_date: state.end_date,
        country: state.country,
        
    };

    const [formFields, setFormFields] = useState(defaultFormFields);

    const deleteid = async (id) => {
        let result = await fetch(`http://localhost:4002/user/ftydeleteforeign/${id}`, {
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

        const { topic,start_date,end_date,country,faculty_name} = formFields;
        if (topic === "") {

            toast.error("Enter topic Name")

        }
        else {
            const response = await FtyEditForeign(formFields);
            if (response.status === 200) {
                setFormFields({
                    ...formFields, 
                    faculty_name:state.faculty_name,
                    topic:state.topic,
                    start_date: state.start_date,
                    end_date: state.end_date,
                    country: state.country,
                });
                if(utype === "1"){
                    navigate("/StaffHome/StaffForeign")
                }
                else{
                navigate("/faculty/foreign")
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

                <div className={signupStyle["form-item"]} id="topic">
                        <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>topic</label>
                        <input style={{ height: "30px" }} className={signupStyle.myInput}
                            placeholder="Enter the Topic"
                            name="topic"
                            type="text"
                            value={formFields.topic}
                            onChange={hanldeInputValueChange}
                        />
                    </div>


                    <div className={signupStyle["form-item"]} id="start_date">
                        <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>start_date</label>
                        <input style={{ height: "30px" }} className={signupStyle.myInput}
                            placeholder="Enter the Start Date"
                            name="start_date"
                            type="text"
                            value={formFields.start_date}
                            onChange={hanldeInputValueChange}
                        />
                    </div>

                    <div className={signupStyle["form-item"]} id="end_date">
                        <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>end_date</label>
                        <input style={{ height: "30px" }} className={signupStyle.myInput}
                            placeholder="Enter the End Date"
                            name="end_date"
                            type="text"
                            value={formFields.end_date}
                            onChange={hanldeInputValueChange}
                        />

                    </div>

                    <div className={signupStyle["form-item"]} id="country">
                        <label style={{ fontSize: 20 }} className={signupStyle.myLabel}>country</label>
                        <input style={{ height: "30px" }} className={signupStyle.myInput}
                            placeholder="Enter the date"
                            name="country"
                            type="text"
                            value={formFields.country}
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

export default FtyForeignEditPage;