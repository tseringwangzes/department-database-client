import React, {Component} from 'react';
import sidebarStyles from "./sidebar.module.css";
import {SidebarData} from "./staffData";

export default class Sidebar extends Component{
render(){
    return(
        
        <div className={sidebarStyles.sidebar}>
            <ul className={sidebarStyles.SidebarList}>
            {SidebarData.map((val,key)=>{
                return(
                    <li key={key} 
                    className={sidebarStyles.row}
                    id={window.location.pathname === val.link?"active":""}
                    onClick={()=>{window.location.pathname=val.link}}><div className={sidebarStyles.icon}>{val.icon}</div>
                    <div className={sidebarStyles.title}>
                        {val.title}
                    </div>
                    </li>
                )
            })}
            </ul>
        </div>
        
    );
}
}

// export default Sidebar