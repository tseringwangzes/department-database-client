import React, { Component, useState } from 'react';
import sidebarStyles from "./sidebar.module.css";
import { AdminSidebarData } from "./AdminSidebarData";
import { useLocation, useNavigate } from 'react-router-dom';
export default class AdminSidebar extends Component {
    render() {
        const faculty_name = this.props.faculty_name;
        console.log(faculty_name);             
        {  
            return (

                
                <div className={sidebarStyles.sidebar}>
                    <ul className={sidebarStyles.SidebarList}>
                        {AdminSidebarData.map((val, key) => {
                          return(
                                <>
                                <li key={key}
                                    className={sidebarStyles.row}
                                    id={window.location.pathname === val.link ? "active" : ""}
                                    onClick={()=>{window.location.pathname=val.link;
                                    val.fname=faculty_name}}>
                                    <div className={sidebarStyles.icon}>{val.icon}</div>
                                    <div className={sidebarStyles.title}>{val.title}</div>

                                </li>

                                </>  
                          )                              
                        })}
                    </ul>
                </div>

            );
        }
    }
}




