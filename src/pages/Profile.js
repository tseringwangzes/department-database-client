import React from 'react';
import Sidebar from "../components/Sidebar";
import ProfileStyles from './Profile.module.css';
import { useNavigate } from 'react-router-dom';
function Profile() {
    var email = localStorage.getItem('email');
    console.log(email)
    return (
        <>
            <Sidebar  student_name = {email}/>
            <section className={ProfileStyles.page}>
                <div className={ProfileStyles.form_data}>
                    <div className={ProfileStyles["user-info"]}>
                        <form method="">
                            <div className="row">
                                <div className='col-md-4'>
                                    <div className={ProfileStyles["user-avatar"]}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfuwLp9vkIvTOU_3siQKTq5zLdU5FvdH3ng&usqp=CAU" alt="" />
                                    </div>
                                </div>
                                <div className='col-md-8'>
                                    <div className={ProfileStyles["user-details"]}>

                                        <h5>Tarushi</h5>
                                        <h6>tarushi2k@gmail.com</h6>
                                        <h6>PhD in Computer Networks</h6>
                                        <h6>Under Prof. XYZ</h6>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;