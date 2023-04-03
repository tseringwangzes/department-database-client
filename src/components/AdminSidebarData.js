import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import TourIcon from '@mui/icons-material/Tour';
import ImportContactsSharpIcon from '@mui/icons-material/ImportContactsSharp';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarsIcon from '@mui/icons-material/Stars';
export const AdminSidebarData = [
    {
        title:"Home",
        icon:<HomeIcon />,
        link:"/Admin",
        fname:"",
    },
    {
        title:"Add new User",
        icon:<EmojiEventsIcon />,
        link:"/register",
        fname:"",
    },
    {
        title:"Awards",
        icon:<EmojiEventsIcon />,
        link:"/Admin/Awards",
        fname:"",
    },
    {
        title:"Achievements",
        icon:<StarsIcon />,
        link:"/Admin/Achievements",
        fname:""
    },
    {
        title:"Workshops/Seminar Organised",
        icon:<PeopleIcon />,
        link:"/Admin/Seminars",
        fname:""
    },
    {
        title:"Foreign Visits",
        icon:<TourIcon />,
        link:"/Admin/foreign",
        fname:""
    },
    {
        title:"Publications/Patents",
        icon:<ImportContactsSharpIcon />,
        link:"/Admin/Publications",
        fname:""
    },
    {
        title:"Project Grants",
        icon:<CurrencyExchangeSharpIcon />,
        link:"/Admin/Projects",
        fname:""
    },
    {
        title:"Approve students",
        icon:<VerifiedIcon/>,
        link:"/Admin/Approve",
        fname:"",
    },
]